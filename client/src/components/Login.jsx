import { useState } from "react";
import { FormControl, Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "./";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login");
  };

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
          <Button
            onClick={(e) => handleSubmit(e)}
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
            Login
          </Button>
        </FormControl>
        <Link to="/register" style={{ textDecoration: "none" }} >
          <Typography
            variant="body2"
            sx={{ color: "#fff", "&:hover": { color: "#12eb65" } }}
          >
            ¿Don't have an account? Register
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
