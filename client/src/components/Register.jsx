import { FormControl, Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "./";

const Register = () => {

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <FormControl>
          <TextField id="email" type="email" label="Email" variant="standard"
            sx={{
              width: "300px",
              marginBottom: "1rem",
            }}
            InputProps={{
              sx: {
                fontSize: "1rem",
                color: "white",
              },
            }}
          />
          <TextField id="password" type="password" label="Password" variant="standard"
            sx={{
              width: "300px",
              marginBottom: "1rem",
            }}
            InputProps={{
              sx: {
                fontSize: "1rem",
                color: "white",
              },
            }}
          />
          <TextField id="password2" type="password" label="Confirm Password" variant="standard"
            sx={{
              width: "300px",
              marginBottom: "1rem",
            }}
            InputProps={{
              sx: {
                fontSize: "1rem",
                color: "white",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              width: "100%",
              marginBottom: "1rem",
              backgroundColor: "#19ca5d",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#12eb65",
              },
            }}
          >
            Register
          </Button>
          <Link to="/login" style={{ textDecoration: "none", textAlign: "center" }} >
          <Typography
            variant="body2"
            sx={{ color: "#fff", "&:hover": { color: "#12eb65" } }}
          >
            ¿Already have an account? Login
          </Typography>
        </Link>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Register