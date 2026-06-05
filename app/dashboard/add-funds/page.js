 "use client"
import { db } from "@/config/firebase.config";
import { Card, CardContent, CardHeader, TextField, FormControl, InputLabel, Select, MenuItem,  CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  amount: yup.number().required("Amount is required").min(1000),

  category: yup.string().oneOf(["Savings", "Food", "Rent"]).required("Category is required"),

  description: yup.string().required("Description is required").min(10, "Description must be at least 10 characters"),
});

export default function AddFunds() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const {data: session} = useSession();

  if (!session) {
    redirect("/login");
  }
  
  const closeModel = () => setOpen(false);

  const {handleSubmit, handleChange, values, errors, touched} = useFormik({
    initialValues: {
      amount: "",
      category: "",
      description: "",
    },
    onSubmit: async (values, {resetForm}) => {
      try {
        setLoading(true);
        await addDoc(collection(db, "transactions"), {
        user: session?.user?.id,
        type: "withdrawal",
        amount: Number(values.amount),
        description: values.description,
        timeCreated: new Date(),
      });
        setLoading(false);
        setOpen(true);
        resetForm();
      }
      catch (errors) {
      console.error("unable withdraw funds:", errors);
      setLoading(false);
    }
    },
    validationSchema: schema,
  });

  return (
    <main className="min-h-screen flex justify-center py-10 px-5">
      <div>
        <Card sx={{width: 400, height: 450}}>
          <CardHeader 
            sx={{textAlign: "center"}}
            title="Add Funds"
            subheader="Deposit money into your account"
          />

          <CardContent> 
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <div>
                <TextField 
                  fullWidth
                  label="Amount (₦)"
                  type="number"
                  size="small"
                  placeholder="Enter Amount"
                  id="amount"
                  value={values.amount}
                  onChange={handleChange}
                />
                {touched.amount && errors.amount ? <span className="text-sm text-red-500">{errors.amount}</span> : null}
              </div>

              <FormControl size="small">
                <InputLabel id="category-label">
                  Category
                </InputLabel>

                <Select
                  label="category"
                  id="category"
                  labelId="category-label"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value="Savings">Savings</MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Rent">Rent</MenuItem>
                </Select>
                {touched.category && errors.category ? <span className="text-sm text-red-500">{errors.category}</span> : null}
              </FormControl>

              <div>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  id="description"
                  size="small"
                  type="text"
                  placeholder="Description"
                  value={values.description}
                  onChange={handleChange}
                />
                {touched.description && errors.description ? <span className="text-sm text-red-500">{errors.description}</span> : null}
              </div>

              <button className="w-full h-13 rounded-md shadow-md text-white bg-[#1D4ED8] cursor-pointer active:opacity-75 flex justify-center items-center gap-4" type="submit">
                <span>Add Funds</span>
                {loading ?  (
                  <CircularProgress sx={{color: "white"}} size="30px" />)
                  : null
                }
              </button>
            </form>
          </CardContent>
        </Card>

        <Dialog open={open} onClose={closeModel}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <Typography>Funds has been added sucessfuly</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModel}>close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </main>
  );
}