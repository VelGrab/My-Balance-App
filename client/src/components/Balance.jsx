import { useState } from "react";
import { Modal, Box, Typography, Container, Button } from "@mui/material";
import { style, boxContBalance, containerBalance } from '../utils/styles'
import axios from "axios";


const Balance = () => {
  const balance = -10;

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
      <Container
        sx={containerBalance}
      >
        <Typography
          mt={1}
          variant="h5"
          sx={{ color: "#fff", textAlign: "center" }}
        >
          Transactions
        </Typography>
        <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "1rem" }}
            onClick={handleOpen}
          >
            Income
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
          <Button variant="contained" color="error">
            Expense
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Balance;
