import React from "react";

import { PAGE_CHUNK_SIZE } from "randomConfig";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { BookCard, SearchBar } from "components";
import { Book, useBookState } from "contexts/books";
import { useLocation, Link } from "react-router-dom";
import { createArrayChunks, useGetPageNumber } from "utils";
import { useFetchBooks } from "services";
import { BOOK_FETCHING_URL } from "randomConfig"; // For later use

export const Search = (): JSX.Element => {
  // Somehow this hook needs to not call at every re-render
  const { booksData, isLoading, error, fetchBooks } =
    useFetchBooks<Book[]>(BOOK_FETCHING_URL);
  const BookState = useBookState();
  const currentPage = useGetPageNumber("page", useLocation);
  const dataChunks: Book[][] = createArrayChunks<Book>(
    BookState.books,
    PAGE_CHUNK_SIZE
  );

  const renderedBookCards = () => {
    return dataChunks
      .filter((_, i) => i + 1 === currentPage)
      .at(0)
      ?.map((book) => <BookCard key={book.id} bookData={book} />);
  };

  // Still don't know a better way of
  // feeding external data to the state
  React.useEffect(() => {
    // This solutions is flawed right now anyways
    BookState.overrideBooks(booksData);
  }, []);

  return (
    <>
      <SearchBar />

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
        {renderedBookCards()}
      </Box>

      {/* Container for pagination element */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          page={currentPage} // Still don't know if this prop is useful
          count={dataChunks.length}
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
