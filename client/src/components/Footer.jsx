import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "40px",
        backgroundColor: "#1a1a1a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="body1"
          color="#e3f2fd"
          sx={{ textAlign: "center" }}
        >
          <Link
            href="https://www.linkedin.com/in/julio-cesar-pena/"
            target="_blank"
            underline="none"
            sx={{
              color: "#e3f2fd",
              textDecoration: "none",
              marginLeft: "1rem",
            }}
          >
            Linkedin
          </Link>
          {" | "}
          <Link
            href="https://portfolio-julio-cesar.vercel.app/contact"
            target="_blank"
            underline="none"
            sx={{ color: "#e3f2fd", textDecoration: "none" }}
          >
            Contact
          </Link>
        </Typography>
        <Typography
          variant="body1"
          color="#e3f2fd"
          sx={{ textAlign: "center", marginLeft: "auto", marginRight: "1rem" }}
        >
          All rights reserved © {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
