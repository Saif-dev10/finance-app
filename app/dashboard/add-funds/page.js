import { Card, CardContent, CardHeader, TextField, FormControl, InputLabel, Select, MenuItem  } from "@mui/material";

export default function AddFunds() {
  return (
    <main className="min-h-screen flex justify-center py-10 px-5">
      <div>
        <Card sx={{width: 370}}>
          <CardHeader 
            sx={{textAlign: "center"}}
            title="Add Funds"
            subheader="Deposit money into your account"
          />

          <CardContent> 
            <form className="flex flex-col gap-3">
              <div>
                <TextField 
                  fullWidth
                  label="Amount (₦)"
                  type="number"
                  size="small"
                  placeholder="Enter Amount"
                  id="amount"
                />
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
                >
                  <MenuItem value="salary">Salary</MenuItem>
                  <MenuItem value="food">Food</MenuItem>
                  <MenuItem value="rent">Rent</MenuItem>
                </Select>
              </FormControl>

              <div>
                <TextField
                  fullWidth
                  multiline
                  row={3}
                  label="Description"
                  id="decription"
                  size="small"
                  type="text"
                  placeholder="Description"
                />
              </div>

              <button className="w-full h-13 rounded-md shadow-md text-white bg-[#1D4ED8] cursor-pointer active:opacity-75">Add Funds</button>
              
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}