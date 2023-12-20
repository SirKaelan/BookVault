import React from "react";

import { Box, Pagination, PaginationItem, TextField } from "@mui/material";
import { BookCard } from "components";
import { booksData } from "mockBooksData";
import { Book, useBookState } from "contexts/books";
import { useLocation, Link } from "react-router-dom";

// Util
const createArrayChunks = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const labelChunks = (dataChunks: Book[][]) => {
  const result: { page: number; data: Book[] }[] = [];
  dataChunks.forEach((chunk, i) => {
    result.push({ page: i + 1, data: chunk });
  });
  return result;
};

export const Search = (): JSX.Element => {
  const BookState = useBookState();

  const PAGE_CHUNK_SIZE = 3;

  const dataChunks: Book[][] = createArrayChunks<Book>(
    BookState.books,
    PAGE_CHUNK_SIZE
  );
  const pagesData = labelChunks(dataChunks);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page") || "1", 10);

  const renderedBooks = () => {
    return pagesData
      .filter((x) => x.page === currentPage)
      .at(0)
      ?.data.map((book) => <BookCard key={book.id} bookData={book} />);
  };

  // Still don't know a better way of
  // feeding external data to the state
  React.useEffect(() => {
    // This solutions is flawed right now anyways
    BookState.overrideBooks(booksData);
  }, []);

  return (
    <>
      {/* Container for search bar */}
      <Box sx={{ mb: 4, px: 4 }}>
        <TextField label="Search" variant="outlined" sx={{ width: "100%" }} />
      </Box>

      {/* Container for book cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          mb: 4,
        }}
      >
        {renderedBooks()}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          page={currentPage} // Still don't know if this prop is useful
          count={pagesData.length}
          shape="rounded"
          variant="outlined"
          color="primary"
          size="large"
          renderItem={(btnData) => (
            <PaginationItem
              component={Link}
              to={`/search${btnData.page === 1 ? "" : `?page=${btnData.page}`}`}
              {...btnData}
            />
          )}
        />
      </Box>
    </>
  );
};
