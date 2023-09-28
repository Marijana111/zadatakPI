import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          onClick={() => {
            navigate("/");
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LocalMoviesIcon />
          </IconButton>
          <Typography
            className="nav-link"
            variant="h6"
            color="inherit"
            component="div"
          >
            Movies
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
