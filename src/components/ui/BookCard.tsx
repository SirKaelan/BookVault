import React from "react";

import type { Book } from "contexts/books";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import type { AnchorClickEvent } from "types/eventTypes";
import { useNavigate } from "react-router-dom";

type BookCardProps = {
  bookData: Book;
};

export const BookCard = ({ bookData }: BookCardProps): React.JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate({ pathname: "/book", search: `?id=${bookData.id}` });
  };

  const handleAuthorClick = (e: AnchorClickEvent) => {
    navigate({ pathname: "/author", search: `?id=${bookData.author_id}` });
    e.stopPropagation(); // Prevents the click event from bubbling up
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
        // TODO: Temporary solution
        image={bookData.cover as string}
        title={`"${bookData.title}" cover`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bookData.title}
        </Typography>
        <Link underline="hover" color="inherit" onClick={handleAuthorClick}>
          <Typography variant="body2" color="text.secondary">
            {bookData.author_name}
          </Typography>
        </Link>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};
