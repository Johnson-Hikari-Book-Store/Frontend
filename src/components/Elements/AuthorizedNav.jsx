import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Nav = () => {
  return (
    <>
      <AppBar position="static" color="primary" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginLeft: "auto",
              color: "secondary.contrastText",
              fontFamily: "Zilla Slab",
              letterSpacing: "0.1rem",
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            BookHub
          </Typography>
          <Typography
            component="div"
            sx={{
              marginLeft: "auto",
              color: "secondary.contrastText",
              fontFamily: "Zilla Slab",
              letterSpacing: "0.05rem",
              cursor: "pointer",
            }}
          >
            Sign in
          </Typography>
          <Typography
            variant="div"
            component="div"
            sx={{
              marginLeft: 3,
              color: "secondary.contrastText",
              fontFamily: "Zilla Slab",
              letterSpacing: "0.05rem",
              cursor: "pointer",
            }}
          >
            Sign up
          </Typography>
          <PrimaryBtn
          // sx={{
          //   marginLeft: 3,
          //   backgroundColor: "background.button",
          //   fontFamily: "Zilla Slab",
          //   color: "secondary.main",
          //   letterSpacing: "0.2rem",
          //   cursor: "pointer",
          //   fontWeight: "bold",
          //   "&:hover": {
          //     backgroundColor: "background.button",
          //   },
          //   textTransform: "none",
          // }}
          >
            asdsadsdas
          </PrimaryBtn>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
