import { Button } from "@mui/material";
import React from "react";

const PrimaryBtn = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "secondary.dark",
        display: "block",
        ml: 2,
        px: 2,
        textTransform: "none",
        "&:hover": { bgcolor: "secondary.light" },
        letterSpacing: "0.2rem",
        fontFamily: "Zilla Slab",
        fontWeight: "bold",
        color: "secondary.contrastText",
      }}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryBtn;
