import React from "react";

import {
  PAGE_SIZE,
  PAGE_NUMBER_PARAM_NAME,
  SEARCH_TERM_PARAM_NAME,
} from "@/randomConfig";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { BookCard, SearchBar } from "@/components";
import { useSearchParams } from "react-router";
import { useGetQueryValue } from "@/utils";
import { useFetchPaginatedBooks } from "@/hooks";

export const Search = (): React.JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useGetQueryValue(PAGE_NUMBER_PARAM_NAME);
  const searchTerm = searchParams.get(SEARCH_TERM_PARAM_NAME);
  const paginatedData = useFetchPaginatedBooks(
    currentPage,
    PAGE_SIZE,
    searchTerm
  );

  const handlePaginationClick = (nextPage: number | null) => {
    if (nextPage === currentPage) return;
    setSearchParams((params) => {
      params.set(PAGE_NUMBER_PARAM_NAME, String(nextPage));
      return params;
    });
  };

  if (paginatedData.type === "loading") {
    return (
      <>
        <SearchBar />
        <div>Loading...</div>
      </>
    );
  }

  if (paginatedData.type === "error") {
    return (
      <>
        <SearchBar />
        <div>{paginatedData.message}</div>
      </>
    );
  }

  return (
    <>
      <SearchBar />
      <p>Searching for: "{searchTerm}"</p>
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
        {paginatedData.data.length > 0
          ? paginatedData.data.map((book) => (
              <BookCard key={book.id} bookData={book} />
            ))
          : "No books were found."}
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
              {...btnData}
              onClick={() => handlePaginationClick(btnData.page)}
            />
          )}
        />
      </Box>
    </>
  );
};
