import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "../components/Elements/Nav";

const AppLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Nav />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default AppLayout;
