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
  
  const BookCard = () => {
    return (
      <>
        <Container sx={{ marginTop: 5 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Container>
      </>
    );
  };
  
  export default BookCard;
  