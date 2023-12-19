import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { booksData } from "mockBooksData";
import { useBookState } from "contexts/books";

export const Search = (): JSX.Element => {
  const BookState = useBookState();

  // Still don't know a better way of
  // feeding external data to the state
  React.useEffect(() => {
    // This solutions is flawed right now anyways
    BookState.overrideBooks(booksData);
  }, []);

  return (
    <>
      <Box sx={{ my: 4, px: 4 }}>
        <TextField label="Search" variant="outlined" sx={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {booksData.map((book) => (
          <Card key={book.id} sx={{ width: 245, boxShadow: 6, mb: 4 }}>
            <CardMedia
              sx={{ height: 300 }}
              component="img"
              image={book.cover}
              title={`"${book.title}" cover`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.author}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained">
                Add
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};
