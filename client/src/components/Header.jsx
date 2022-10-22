import React from "react";
import { Stack, IconButton, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../assets/finanzas.png'
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"flex-end"}
      alignItems={{ xs: "center", sm: "center" }}
      p={{ xs: 1, sm: 2 }}
      sx={{ position: "sticky", top: 0 }}
    >
      <Box sx={{
        width: '25%'
      }}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            height={90}
          />
        </Link>
      </Box>
      <Box sx={{
        width: '75%',
        display: 'flex',
        justifyContent: 'flex-end'

      }}>
        <Box marginRight={{ xs: 0, sm: 2 }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <IconButton
              aria-label="login"
              size="small"
              sx={{
                borderRadius: "0%",
                "&:hover": {
                  backgroundColor: "#26d4b7",
                },
              }}
            >
              <LoginIcon sx={{ color: "#e3f2fd", fontSize: "1.5rem" }} />
              <Typography variant="body2" color="#e3f2fd" marginLeft={1}>
                Login
              </Typography>
            </IconButton>
          </Link>
        </Box>
        <Box marginRight={{ xs: 0, sm: 2 }}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <IconButton
              aria-label="login"
              size="small"
              sx={{
                borderRadius: "0%",
                "&:hover": {
                  backgroundColor: "#26d4b7",
                },
              }}
            >
              <AppRegistrationIcon
                sx={{ color: "#e3f2fd", fontSize: "1.5rem" }}
              />
              <Typography variant="body2" color="#e3f2fd" marginLeft={1}>
                Register
              </Typography>
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
