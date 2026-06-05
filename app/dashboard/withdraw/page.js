"use client";

import { db } from "@/config/firebase.config";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import * as yup from "yup";

export default function Withdraw() {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user?.id) return;

    const q = query(
      collection(db, "transactions"),
      where("user", "==", session.user.id)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const transactions = snapshot.docs.map((doc) => doc.data());

      const totalDeposits = transactions
        .filter((t) => t.type === "deposits" || !t.type)
        .reduce((sum, t) => sum + Number(t.amount), 0);

      const totalWithdrawals = transactions
        .filter((t) => t.type === "withdrawal")
        .reduce((sum, t) => sum + Number(t.amount), 0);

      setBalance(totalDeposits - totalWithdrawals);
    });

    return () => unsubscribe();
  }, [session]);

  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Amount is required")
      .min(100, "Minimum withdrawal is ₦100")
      .max(balance, `Insufficient funds. Your balance is ₦${balance}`),

    description: yup
      .string()
      .required("Description is required")
      .min(5, "Must be at least 5 characters"),
  });

  const closeModel = () => setOpen(false);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      amount: "",
      description: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        await addDoc(collection(db, "transactions"), {
          user: session?.user?.id,
          type: "withdrawal",
          amount: Number(values.amount),
          description: values.description,
          timeCreated: new Date(),
        });

        setOpen(true);
        resetForm();
      } catch (error) {
        console.error("Unable to withdraw funds:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <main className="min-h-screen flex justify-center items-center px-20 py-10">
      <Card sx={{ width: 400, height: 400 }}>
        <CardHeader
          sx={{ textAlign: "center" }}
          title="Withdraw Funds"
          subheader="Withdraw money from your account"
        />

        <div>
          <p className="text-xs text-center font-medium text-gray-500 uppercase">
            Available Balance
          </p>

          <p
            className={`text-2xl font-bold text-center mt-1 ${
              balance > 0 ? "text-blue-700" : "text-red-500"
            }`}
          >
            ₦{balance.toLocaleString()}
          </p>
        </div>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <TextField
                fullWidth
                size="small"
                id="amount"
                name="amount"
                label="Withdrawal Amount"
                type="number"
                placeholder="Enter withdrawal amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
              />

              {touched.amount && errors.amount ? (
                <span className="text-red-500 text-xs">{errors.amount}</span>
              ) : null}
            </div>

            <div>
              <TextField
                fullWidth
                multiline
                rows={2}
                size="small"
                id="description"
                name="description"
                label="Description"
                type="text"
                placeholder="Enter withdrawal notes"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />

              {touched.description && errors.description ? (
                <span className="text-red-500 text-xs">
                  {errors.description}
                </span>
              ) : null}
            </div>

            <button
              className="w-full h-10 bg-[#1D4ED8] text-white active:opacity-75 cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Withdrawing..." : "Withdraw Funds"}
            </button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={closeModel}>
        <DialogTitle>Success</DialogTitle>

        <DialogContent>
          <Typography>Withdrawal successful</Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeModel}>Close</Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}