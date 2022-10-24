import { Stack, IconButton, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { boxHeader, iconBtnHeader } from "../utils/styles";
import logo from "../assets/finanzas.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Header = () => {
  const userInfo = localStorage.getItem("user");
  const navigate = useNavigate();
  
  const handleClick = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload()
  };

  return (
    <Stack
      direction="row"
      justifyContent={"flex-end"}
      alignItems={{ xs: "center", sm: "center" }}
      p={{ xs: 1, sm: 2 }}
      sx={{ position: "sticky", top: 0 }}
    >
      <Box sx={{ width: "25%" }}>
        <Link to="/">
          <img src={logo} alt="logo" height={90} />
        </Link>
      </Box>
      <Box sx={boxHeader}>
        {userInfo ? (
          <Box marginRight={{ xs: 0, sm: 2 }} onClick={handleClick}>
            <IconButton aria-label="login" size="small" sx={iconBtnHeader}>
              <LogoutIcon sx={{ color: "#e3f2fd", fontSize: "1.5rem" }} />
              <Typography variant="body2" color="#e3f2fd" marginLeft={1}>
                Logout
              </Typography>
            </IconButton>
          </Box>
        ) : (
          <Box sx={boxHeader}>
            <Box marginRight={{ xs: 0, sm: 2 }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <IconButton aria-label="login" size="small" sx={iconBtnHeader}>
                  <LoginIcon sx={{ color: "#e3f2fd", fontSize: "1.5rem" }} />
                  <Typography variant="body2" color="#e3f2fd" marginLeft={1}>
                    Login
                  </Typography>
                </IconButton>
              </Link>
            </Box>
            <Box marginRight={{ xs: 0, sm: 2 }}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <IconButton aria-label="login" size="small" sx={iconBtnHeader}>
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
        )}
      </Box>
    </Stack>
  );
};

export default Header;
