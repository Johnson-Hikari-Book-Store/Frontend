import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Hero from "../components/Elements/Hero";
import Books from "../pages/Books";

const Home = () => {
  return (
    <>
      <Hero />
      <Books />
    </>
  );
};

export default Home;
