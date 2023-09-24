import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LocalMoviesIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Movies
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;