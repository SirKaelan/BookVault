import React from "react";

import { Book } from "contexts/books";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { DivClickEvent } from "types/eventTypes";
import { useNavigate } from "react-router-dom";

type BookCardProps = {
  bookData: Book;
};

export const BookCard = ({ bookData }: BookCardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = (e: DivClickEvent) => {
    navigate({ pathname: "/book", search: `?id=${bookData.id.toString()}` });
  };

  return (
    <Card
      sx={{
        width: 245,
        boxShadow: 6,
        mb: 4,
        cursor: "pointer",
        transition: "transform 0.1s ease-in-out",
        "&:hover": { transform: "translateY(-0.5rem)" },
      }}
      onClick={handleCardClick}
    >
      <CardMedia
        sx={{ height: 300 }}
        component="img"
        image={bookData.cover}
        title={`"${bookData.title}" cover`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bookData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bookData.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
