import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

function Footer() {
  return (
    <AppBar position="static" className="footer">
      <Typography variant="body2" color="inherit">
        &copy; {new Date().getFullYear()} Movies
      </Typography>
    </AppBar>
  );
}

export default Footer;
