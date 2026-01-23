import { useEffect, useState } from "react";

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

  // FIXME: Current flaw is that submitted state is not properly reset, maybe the only flaw is that i allow "empty input submission" and i only reset the submitted state when i interact with the input and auto focusing or blurring doesn't change anything

  const handleSearchClick = () => setSubmitted(false);

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
      console.log("Wjhat's submitted?:", submitted);
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

  return {
    searchTerm,
    submitted,
    handleSearchInput,
    handleSearchClick,
    setSearchTerm,
    handleSearchSubmit,
  };
};
