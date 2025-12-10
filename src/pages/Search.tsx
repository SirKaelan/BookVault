import React from "react";
import { useSearchParams } from "react-router";
import { useFetchPaginatedBooks } from "@/hooks";

import {
  PAGE_SIZE,
  PAGE_NUMBER_PARAM_NAME,
  SEARCH_TERM_PARAM_NAME,
} from "@/randomConfig";

import { BookCard, SearchBar } from "@/components";
import { Text } from "@chakra-ui/react/text";
import { Stack } from "@chakra-ui/react/stack";
import { Wrap } from "@chakra-ui/react/wrap";
import { Center } from "@chakra-ui/react/center";
import { ButtonGroup, IconButton } from "@chakra-ui/react/button";
import { Pagination } from "@chakra-ui/react/pagination";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const Search = (): React.JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(
    searchParams.get(PAGE_NUMBER_PARAM_NAME) || "1",
    10
  );
  const searchTerm = searchParams.get(SEARCH_TERM_PARAM_NAME);
  const books = useFetchPaginatedBooks(currentPage, PAGE_SIZE, searchTerm);

  const handlePaginationClick = (newPage: number) => {
    if (newPage === currentPage) return;
    setSearchParams((prevParams) => {
      prevParams.set(PAGE_NUMBER_PARAM_NAME, newPage.toString());
      return prevParams;
    });
  };

  if (books.type === "loading") {
    return (
      <>
        <SearchBar />
        <div>Loading...</div>
      </>
    );
  }

  if (books.type === "error") {
    return (
      <>
        <SearchBar />
        <div>{books.message}</div>
      </>
    );
  }

  return (
    <>
      <Stack gap="10">
        <SearchBar />

        <Stack gap="20">
          <Text fontSize="xl">Searching for: '{searchTerm}'</Text>

          {/* Search results book cards */}
          <Wrap justify="center" gap="6">
            {books.data.length > 0
              ? books.data.map((book) => (
                  <BookCard key={book.id} bookData={book} />
                ))
              : "No books were found."}
          </Wrap>

          {/* Pagination component */}
          <Center>
            <Pagination.Root
              count={books.pagination.total_books}
              pageSize={PAGE_SIZE}
              page={currentPage}
            >
              <ButtonGroup size="md" variant="ghost">
                <Pagination.PrevTrigger asChild>
                  <IconButton>
                    <LuChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                  render={(page) => (
                    <IconButton
                      variant={{ base: "ghost", _selected: "surface" }}
                      _selected={{
                        bg: "blue.100/50",
                      }}
                      onClick={() => handlePaginationClick(page.value)}
                    >
                      {page.value}
                    </IconButton>
                  )}
                />

                <Pagination.NextTrigger asChild>
                  <IconButton>
                    <LuChevronRight />
                  </IconButton>
                </Pagination.NextTrigger>
              </ButtonGroup>
            </Pagination.Root>
          </Center>
        </Stack>
      </Stack>
    </>
  );
};
