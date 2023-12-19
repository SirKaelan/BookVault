import React from "react";

import { Box, TextField } from "@mui/material";
import { BookCard } from "components";
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
          <BookCard key={book.id} bookData={book} />
        ))}
      </Box>
    </>
  );
};
