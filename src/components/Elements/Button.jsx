import React from "react";
import { Button } from "@mui/material";

const PrimaryBtn = (props) => {
  return (
    <Button
      sx={{
        marginLeft: 3,
        backgroundColor: "background.button",
        fontFamily: "Zilla Slab",
        color: "secondary.main",
        letterSpacing: "0.2rem",
        cursor: "pointer",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "background.button",
        },
        textTransform: "none",
      }}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryBtn;
