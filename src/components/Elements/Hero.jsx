import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import topImg from "../../assets/booktop.png";
import SearchBar from "../UI/SearchBar";

const Hero = () => {
  return (
    <>
      <Box
        sx={{ height: {  md: "350px"  }, display: { md: "flex" } }}
      >
        <Box sx={{ width: "100%", height: { sm: "300px", md: "350px" } }}>
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
          <SearchBar />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
