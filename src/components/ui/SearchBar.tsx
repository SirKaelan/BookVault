import React, { useEffect, useRef } from "react";

import { useSearchParams } from "react-router";

import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "@chakra-ui/react/input-group";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Group } from "@chakra-ui/react/group";
import { Button } from "@chakra-ui/react/button";

import { useSearch } from "@/hooks";

export const SearchBar = (): React.JSX.Element => {
  const {
    searchTerm,
    submitted,
    handleSearchInput,
    handleSearchSubmit,
    handleSearchFocus,
  } = useSearch();
  const [searchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  // Always check if there are any search params, if so, focus the input
  useEffect(() => {
    if (searchParams.size === 0) inputRef.current?.focus();
  });

  useEffect(() => {
    if (submitted) {
      inputRef.current?.blur();
    }
  }, [submitted]);

  return (
    <form onSubmit={handleSearchSubmit}>
      <Group attached w="full">
        <InputGroup startElement={<FaMagnifyingGlass />}>
          <Input
            value={searchTerm}
            onChange={handleSearchInput}
            onFocus={handleSearchFocus}
            ref={inputRef}
            placeholder="Search by Title"
            variant="outline"
            size="lg"
          />
        </InputGroup>
        <Button colorPalette="blue" variant="solid" size="lg" type="submit">
          Search
        </Button>
      </Group>
    </form>
  );
};
