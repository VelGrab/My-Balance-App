import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FormControl, Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { boxLogReg, buttonLogReg } from "../utils/styles";
import { Header } from "./";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("user");

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, []);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://my-balance-app-production.up.railway.app/create", input);
      Swal.fire({
        icon: "success",
        text: "User created, please login.",
        timer: 2000,
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "User already exist.",
        timer: 2000,
      });
    }
  };

  return (
    <Box>
      <Header />
      <Box sx={boxLogReg}>
        <Typography variant="h4" sx={{ color: "#000" }} mb={2}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <TextField
              name="email"
              type="email"
              required
              label="Email"
              variant="standard"
              value={input.email}
              onChange={onChange}
              sx={{ width: "300px", marginBottom: "1rem" }}
              InputProps={{ sx: { fontSize: "1rem", color: "white" } }}
            />
            <TextField
              name="password"
              type="password"
              required
              label="Password"
              variant="standard"
              value={input.password}
              onChange={onChange}
              sx={{ width: "300px", marginBottom: "1rem" }}
              InputProps={{ sx: { fontSize: "1rem", color: "white" } }}
            />
            <Button type="submit" variant="contained" sx={buttonLogReg}>
              Register
            </Button>
            <Link
              to="/login"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#fff", "&:hover": { color: "#12eb65" } }}
              >
                ¿Already have an account? Login
              </Typography>
            </Link>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
