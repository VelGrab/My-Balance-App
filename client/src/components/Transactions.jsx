import { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import {
  boxColorInside,
  boxTextTrans,
  boxContainerTrans,
  boxTextTransExp,
  boxTextTransInc
} from "../utils/styles";
import axios from "axios";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const userId = localStorage.getItem("user");
  let id = JSON.parse(userId);

  const getTransactions = async () => {
    if (!userId) return;
    const { data } = await axios.get(`http://localhost:3001/balance/${id}`);
    let sliceData = data.reverse().slice(0, 10);
    setTransactions(sliceData);
  };

  useEffect(() => {
    getTransactions();
    const interval = setInterval(() => {
      getTransactions();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container sx={boxContainerTrans}>
        {transactions.map((e) => {
          return (
            <Box
              key={e.id}
              sx={boxColorInside}
              bgcolor={e.expense === null ? "#0fe032a2" : "#fc0000a8"}
            >
              <Box sx={boxTextTrans}>
                <h5 className="text__sub">Comment</h5>
                <p className="text__sub__p">{e.comment}</p>
              </Box>
              <Box sx={boxTextTransExp}>
                <h5 className="text__sub">
                  {e.expense === null ? null : "Expense"}
                </h5>
                <p className="text__sub__p">{e.expense}</p>
              </Box>
              <Box sx={boxTextTransInc}>
                <h5 className="text__sub">
                  {e.income === null ? null : "Income"}
                </h5>
                <p className="text__sub__p">{e.income}</p>
              </Box>
              <Box sx={boxTextTrans}>
                <h5 className="text__sub">Date</h5>
                <p className="text__sub__p">{e.date.slice(0, 10)}</p>
              </Box>
              <Box sx={boxTextTrans}>
                <h5 className="text__sub">Concept</h5>
                <p className="text__sub__p">{e.concept}</p>
              </Box>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Transactions;
