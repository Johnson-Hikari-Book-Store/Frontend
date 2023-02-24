import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "../components/UI/Nav";

const AppLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Nav />
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default AppLayout;
