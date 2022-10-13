import { useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { boxContBalance, containerBalance } from "../utils/styles";
import { IncomeModal, ExpenseModal } from "./";

const Balance = () => {
  const balance = 10;

  const [openIncome, setOpenIncome] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);
  const handleOpenIncome = () => setOpenIncome(true);
  const handleOpenExpense = () => setOpenExpense(true);

  return (
    <Box>
      <Box sx={boxContBalance}>
        <Typography variant="h4" sx={{ color: "#fff" }}>
          Balance
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: balance < 0 ? "#fc0000" : "#0fe032" }}
        >
          ${balance}
        </Typography>
      </Box>
      <Container sx={containerBalance}>
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "1rem" }}
            onClick={handleOpenIncome}
          >
            Income
          </Button>
          <IncomeModal openIncome={openIncome} setOpenIncome={setOpenIncome} />
          <Button variant="contained" color="error" onClick={handleOpenExpense}>
            Expense
          </Button>
          <ExpenseModal
            openExpense={openExpense}
            setOpenExpense={setOpenExpense}
          />
        </Box>
        <Typography
          mt={1}
          variant="h5"
          sx={{ color: "#fff", textAlign: "center" }}
        >
          Transactions
        </Typography>
      </Container>
    </Box>
  );
};

export default Balance;
