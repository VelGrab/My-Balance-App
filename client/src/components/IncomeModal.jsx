import { Modal, Box, FormControl, TextField, Checkbox } from "@mui/material";
import { style } from "../utils/styles";
import { categoriesIncome } from "../utils/constants";
import axios from "axios";

const IncomeModal = ({ openIncome, setOpenIncome }) => {
  const handleClose = () => setOpenIncome(false);
  return (
    <Modal
      open={openIncome}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormControl
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="income"
            type="number"
            label="Income"
            variant="outlined"
            sx={{
              width: { xs: "80%", sm: "80%", md: "80%", lg: "50%" },
            }}
            InputProps={{ sx: { height: "3rem", color: "#000" } }}
          />
          <Box
            mt={1}
            sx={{
              width: "100%",
              display: "flex",
              maxHeight: "100vh",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {categoriesIncome.map((category) => (
              <Box
                key={category.name}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "0.2rem",
                }}
              >
                <Checkbox
                  sx={{
                    color: "#66bd2c",
                    "&.Mui-checked": {
                      color: "#66bd2c",
                    },
                  }}
                  type="checkbox"
                  className="category-btn-income"
                  label={category.name}
                  icon={category.icon}
                  value={category.name}
                />
                <p className="category-name">{category.name}</p>
              </Box>
            ))}
          </Box>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default IncomeModal;
