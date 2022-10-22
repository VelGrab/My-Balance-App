import { useState, useEffect } from "react";
import axios from "axios";
import { buttonLogin, boxLogin } from "../utils/styles";
import { FormControl, Box, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "./";

const Login = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("user");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("http://localhost:3001/login", input);
      localStorage.setItem("user", JSON.stringify(data.data._id));
      navigate("/");
    } catch (error) {
      alert("Usuario o contraseña incorrecta");
    }
  };

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Header />
      <Box sx={boxLogin}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormControl>
            <TextField
              name="email"
              type="email"
              label="Email"
              required
              value={input.email}
              onChange={onChange}
              variant="standard"
              sx={{ width: "300px", marginBottom: "1rem" }}
              InputProps={{ sx: { fontSize: "1rem", color: "white" } }}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              required
              onChange={onChange}
              value={input.password}
              variant="standard"
              sx={{ width: "300px", marginBottom: "1rem" }}
              InputProps={{ sx: { fontSize: "1rem", color: "white" } }}
            />
            <Button variant="contained" type="submit" sx={buttonLogin}>
              Login
            </Button>
          </FormControl>
        </form>
        <Link to="/register" style={{ textDecoration: "none" }}>
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
