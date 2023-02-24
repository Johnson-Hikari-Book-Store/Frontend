import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import topImg from "../assets/booktop.png";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: { md: "flex" },
          height: { sm: "300px", md: "40vh" },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <img src={topImg} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            marginX: 3,
          }}
        >
          <Typography
            variant="div"
            component="div"
            sx={{
              verticalAlign: "middle",
              color: "main.contrastText",
              fontFamily: "neuton",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "0.2rem",
              fontWeight: "bold",
              fontSize: "2.2rem",
              textTransform: "capitalize",
            }}
          >
            The ultimate destination for book lovers.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
