import { useState } from "react";
import { Modal, Box, FormControl, TextField, Checkbox, Button } from "@mui/material";
import { style, formStyleExpense, boxExpenseContainer, boxInsideExpense } from "../utils/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { categoriesExpense } from "../utils/constants";
import axios from "axios";

const ExpenseModal = ({ openExpense, setOpenExpense }) => {
  const [input, setInput] = useState({
    expense: "",
    comment: "",
    concept: "",
  });
  const [date, setDate] = useState(dayjs());
  const handleClose = () => setOpenExpense(false);
  const navigate = useNavigate()

  const userId = localStorage.getItem("user");
  let id = JSON.parse(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!userId) {
      navigate('/login')
    }

    await axios.post(`http://localhost:3001/balance/expense/${id}`, {
      expense: input.expense,
      concept: input.concept,
      date: date,
      comment: input.comment,
    });
    setInput({...input === ""})
    handleClose()
  };

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      open={openExpense}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={formStyleExpense}>
            <TextField
              name="expense"
              type="number"
              label="Expense"
              required
              value={input.expense}
              onChange={onChange}
              sx={{width: { xs: "80%", sm: "80%", md: "80%", lg: "50%" }, marginTop: "-25px" }}
              InputProps={{ sx: { height: "2.5rem", color: "#000" } }}
              InputLabelProps={{ style: { fontSize: "0.8rem", lineHeight: "0.8rem" } }}
            />
            <Box mt={1} sx={boxExpenseContainer}>
              {categoriesExpense.map((category) => (
                <Box key={category.name} sx={boxInsideExpense}>
                  <Checkbox
                    sx={{ color: "#eb1d0e", "&.Mui-checked": {  color: "#eb1d0e" } }}
                    type="checkbox"
                    name="concept"
                    icon={category.icon}
                    value={category.name}
                    onChange={onChange}
                    checked={input.concept === category.name}
                  />
                  <p className="category-name">{category.name}</p>
                </Box>
              ))}
            </Box>
            <TextField
              label="Comment"
              name="comment"
              value={input.comment}
              required
              margin="normal"
              onChange={onChange}
              sx={{ width: { xs: "80%", sm: "80%", md: "80%", lg: "50%" } }}
              InputProps={{ sx: { height: "2.5rem", color: "#000" } }}
              InputLabelProps={{
                style: { fontSize: "0.8rem", lineHeight: "0.8rem" },
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                InputProps={{
                  sx: {
                    height: "2rem",
                    color: "#000",
                    marginTop: {
                      xs: "0rem",
                      sm: "2rem",
                      md: "2rem",
                      lg: "1rem",
                    },
                  },
                }}
                disableFuture
                name="date"
                openTo="year"
                margin="normal"
                views={["year", "month", "day"]}
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button
              sx={{ marginTop: { xs: "0.5rem", sm: "2rem", md: "2rem", lg: "2rem" } }}
              type="submit"
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Modal>
  );
};

export default ExpenseModal;
