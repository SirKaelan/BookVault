import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router";

import { PAGE_NUMBER_PARAM_NAME, SEARCH_TERM_PARAM_NAME } from "@/randomConfig";

import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "@chakra-ui/react/input-group";
import { VStack } from "@chakra-ui/react/stack";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Group } from "@chakra-ui/react/group";
import { Button } from "@chakra-ui/react/button";
import { Field } from "@chakra-ui/react/field";

export const SearchBar = (): React.JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [_, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams((prevParams) => {
      prevParams.set(SEARCH_TERM_PARAM_NAME, term);
      prevParams.set(PAGE_NUMBER_PARAM_NAME, "1");
      return prevParams;
    });
    setTerm("");
    inputRef.current?.blur();
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <VStack gap="10">
        <Group attached w="full">
          <Field.Root>
            <InputGroup startElement={<FaMagnifyingGlass />}>
              <Input
                value={term}
                onChange={handleSearchInput}
                ref={inputRef}
                placeholder="Search by Title"
                variant="outline"
                size="lg"
              />
            </InputGroup>
          </Field.Root>
          <Button bg="bg.subtle" variant="outline" size="lg" type="submit">
            Search
          </Button>
        </Group>
      </VStack>
    </form>
  );
};
