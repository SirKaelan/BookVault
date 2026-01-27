import React, { useState, useRef } from "react";

import { useNavigate, useSearchParams, createSearchParams } from "react-router";

import {
  PAGE_NUMBER_PARAM_NAME,
  SEARCH_TERM_PARAM_NAME,
  SEARCH_PAGE_ENDPOINT,
} from "@/randomConfig";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchFocus = () => setSubmitted(false);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const oldSearchTerm = searchParams.get(SEARCH_TERM_PARAM_NAME);
    const currentPage = searchParams.get(PAGE_NUMBER_PARAM_NAME);
    // Most likely the better solution is to cache search results and always search, not check for these specific scenarios
    if (
      oldSearchTerm !== null &&
      currentPage !== null &&
      oldSearchTerm === searchTerm &&
      currentPage === "1"
    ) {
      setSearchTerm("");
      setSubmitted(true);
      return;
    }

    const newSearchParams = createSearchParams({
      [SEARCH_TERM_PARAM_NAME]: searchTerm,
      [PAGE_NUMBER_PARAM_NAME]: "1",
    }).toString();

    setSearchTerm("");
    setSubmitted(true);

    navigate({
      pathname: `/${SEARCH_PAGE_ENDPOINT}`,
      search: `?${newSearchParams}`,
    });
  };

  const inputProps = {
    value: searchTerm,
    onChange: handleSearchInput,
    onFocus: handleSearchFocus,
    ref: inputRef,
  };

  const formProps = {
    onSubmit: handleSearchSubmit,
  };

  return {
    submitted,
    inputRef,
    inputProps,
    formProps,
  };
};
