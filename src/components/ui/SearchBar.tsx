import React, { useEffect } from "react";

import { useSearchParams } from "react-router";

import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "@chakra-ui/react/input-group";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Group } from "@chakra-ui/react/group";
import { Button } from "@chakra-ui/react/button";

import { useSearch } from "@/hooks";
import { SEARCH_TERM_PARAM_NAME } from "@/randomConfig";

export const SearchBar = (): React.JSX.Element => {
  const { submitted, inputRef, inputProps, formProps } = useSearch();
  const [searchParams] = useSearchParams();

  // Always check if there are any search params, if so, focus the input
  useEffect(() => {
    if (
      (searchParams.size === 0 ||
        searchParams.get(SEARCH_TERM_PARAM_NAME) === "") &&
      !submitted
    )
      inputRef.current?.focus();
  });

  useEffect(() => {
    if (submitted) {
      inputRef.current?.blur();
    }
  }, [submitted]);

  return (
    <form {...formProps}>
      <Group attached w="full">
        <InputGroup startElement={<FaMagnifyingGlass />}>
          <Input
            placeholder="Search by Title"
            variant="outline"
            size="lg"
            {...inputProps}
          />
        </InputGroup>
        <Button colorPalette="blue" variant="solid" size="lg" type="submit">
          Search
        </Button>
      </Group>
    </form>
  );
};
