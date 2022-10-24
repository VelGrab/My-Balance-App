import { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { boxContBalance, containerBalance } from "../utils/styles";
import { IncomeModal, ExpenseModal, Transactions } from "./";
import axios from "axios";
import { animated, useSpring } from "@react-spring/web";

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [openIncome, setOpenIncome] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);
  const handleOpenIncome = () => setOpenIncome(true);
  const handleOpenExpense = () => setOpenExpense(true);

  const userId = localStorage.getItem("user");
  const id = JSON.parse(userId);

  const getBalance = async () => {
    if (!userId) return;
    const data = await axios.get(`https://my-balance-app-production.up.railway.app/balance/${id}`);
    let total = 0;
    data.data.forEach((e) => {
      total += e.income - e.expense;
    });
    setBalance(total);
  };

  const Number = ({ number }) => {
    const props = useSpring({
      number: number,
      from: { number: 0 },
      config: { duration: 1000 },
    });
    return (
      <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>
    );
  };

  useEffect(() => {
    getBalance();
  }, []);

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
          $<Number number={balance} />
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
        <Transactions />
      </Container>
    </Box>
  );
};

export default Balance;
