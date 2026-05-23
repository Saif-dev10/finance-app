 "use client"
import { Card, CardContent, CardHeader, TextField, FormControl, InputLabel, Select, MenuItem  } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  amount: yup.number().required("Amount is required").min(1000),

  category: yup.string().oneOf(["Savings", "Food", "Rent"]).required("Category is required"),

  description: yup.string().required("Description is required").min(10, "Description must be at least 10 characters"),
});

export default function AddFunds() {
  const {handleSubmit, handleChange, values, errors, touched} = useFormik({
    initialValues: {
      amount: "",
      category: "",
      description: "",
    },
    onSubmit: () => {
      alert(`I have deposited ₦ ${values.amount} for my ${values.category} `)
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

              <button className="w-full h-13 rounded-md shadow-md text-white bg-[#1D4ED8] cursor-pointer active:opacity-75" type="submit">
                Add Funds
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}