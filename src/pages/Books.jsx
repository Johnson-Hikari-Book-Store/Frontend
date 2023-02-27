import {
  Card,
  CardMedia,
  Container,
  Typography,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BookCard from "../components/Elements/BookCard";

const Books = () => {
  return (
    <>
      {/* will change to grid style */}
      <Container sx={{ marginTop: 5 }}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </Container>
    </>
  );
};

export default Books;
