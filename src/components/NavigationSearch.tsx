import React, { useState, useEffect, useRef } from "react";

import { useNavigate, useSearchParams, createSearchParams } from "react-router";

import {
  PAGE_NUMBER_PARAM_NAME,
  SEARCH_TERM_PARAM_NAME,
  SEARCH_PAGE_ENDPOINT,
} from "@/randomConfig";

import { Box } from "@chakra-ui/react/box";
import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "@chakra-ui/react/input-group";
import { IconButton } from "@chakra-ui/react/button";

import { FaMagnifyingGlass } from "react-icons/fa6";

type NavigationSearchProps = React.ComponentPropsWithRef<typeof IconButton>;

export const NavigationSearch = ({ ...props }: NavigationSearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const navSearchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // If we're showing search bar, attach pointer down event to the document to hide the search bar once we click outside of the it
  useEffect(() => {
    const handleClickOutside = (e: PointerEvent) => {
      if (!navSearchContainerRef.current) return;
      if (!(e.target instanceof Node)) return;

      if (!navSearchContainerRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("pointerdown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [showSearch]);

  // If we're showing the search bar, focus it
  useEffect(() => {
    if (showSearch) {
      inputRef.current?.focus();
    }
  }, [showSearch]);

  const handleIconClick = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const oldSearchTerm = searchParams.get(SEARCH_TERM_PARAM_NAME);
    if (oldSearchTerm !== null && oldSearchTerm === searchTerm) return;

    setShowSearch(false);
    setSearchTerm("");

    const newSearchParams = createSearchParams({
      [SEARCH_TERM_PARAM_NAME]: searchTerm,
      [PAGE_NUMBER_PARAM_NAME]: "1",
    }).toString();

    navigate({
      pathname: `/${SEARCH_PAGE_ENDPOINT}`,
      search: `?${newSearchParams}`,
    });
  };

  return (
    <Box ref={navSearchContainerRef}>
      {!showSearch && (
        <IconButton
          cursor="pointer"
          variant="ghost"
          onClick={handleIconClick}
          {...props}
        >
          <FaMagnifyingGlass />
        </IconButton>
      )}

      {showSearch && (
        <form onSubmit={handleSearchSubmit}>
          <InputGroup
            // First 2 props are to make the input seem like it surrounds the magnifying glass
            ml="1"
            endElementProps={{ paddingInline: "1" }}
            endElement={
              <IconButton variant="ghost" type="submit">
                <FaMagnifyingGlass />
              </IconButton>
            }
          >
            <Input
              value={searchTerm}
              onChange={handleSearchInput}
              ref={inputRef}
              placeholder="Search by Title"
              variant="outline"
              size="lg"
            />
          </InputGroup>
        </form>
      )}
    </Box>
  );
};
