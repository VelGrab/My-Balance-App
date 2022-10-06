import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Home, Footer, Login, Register } from "./components";

const App = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right bottom, #7107e2a6, #5de47fa9)', height: '100vh'}}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;