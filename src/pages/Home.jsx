import { Typography } from "@mui/material";
import React from "react";
import topImg from "../assets/booktop.png";

const Home = () => {
  return (
    <>
      <img
        src={topImg}
        alt=""
        style={{ width: "50%", height: "30%", marginBottom: 5 }}
      />
      <Typography
        variant="div"
        component="div"
        sx={{
          color: "main.contrastText",
          fontFamily: "neuton",
          letterSpacing: "0.05rem",
        }}
      >
        The ultimate destination for book lovers.
      </Typography>
    </>
  );
};

export default Home;
