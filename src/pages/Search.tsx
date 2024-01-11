import React from "react";

import { PAGE_SIZE } from "randomConfig";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { BookCard, SearchBar } from "components";
import { useLocation, Link } from "react-router-dom";
import { useGetQueryValue } from "utils";
import { useFetchPaginatedBooks } from "hooks";

export const Search = (): JSX.Element => {
  const currentPage = useGetQueryValue("page", useLocation);
  const paginatedData = useFetchPaginatedBooks(currentPage, PAGE_SIZE);

  if (paginatedData.type === "loading") {
    return (
      <>
        <SearchBar />
        <div>Loading...</div>
      </>
    );
  } else if (paginatedData.type === "error") {
    return (
      <>
        <SearchBar />
        <div>{paginatedData.message}</div>
      </>
    );
  } else {
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
          {paginatedData.data.map((book) => (
            <BookCard key={book.id} bookData={book} />
          ))}
        </Box>

        {/* Container for pagination element */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            page={paginatedData.pagination.current_page}
            count={paginatedData.pagination.total_pages}
            shape="rounded"
            variant="outlined"
            color="primary"
            size="large"
            renderItem={(btnData) => (
              <PaginationItem
                component={Link}
                to={`/search${
                  btnData.page === 1 ? "" : `?page=${btnData.page}`
                }`}
                {...btnData}
              />
            )}
          />
        </Box>
      </>
    );
  }
};
