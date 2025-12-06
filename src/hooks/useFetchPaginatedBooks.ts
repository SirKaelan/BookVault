import { useState, useEffect } from "react";

import { bookProvider } from "@/apis/bookProvider";
import type { PaginatedBooksStates } from "@/hooks/types";
import { getPaginatedMockBooks } from "@/mocks";

export const useFetchPaginatedBooks = (
  page: number,
  pageSize: number,
  searchTerm: string | null
): PaginatedBooksStates => {
  const [data, setData] = useState<PaginatedBooksStates>({ type: "loading" });

  // useEffect(() => {
  //   bookProvider
  //     .getPaginatedBooks(page, pageSize, searchTerm)
  //     .then((data) => setData(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchTerm, page]);

  useEffect(() => {
    setData(getPaginatedMockBooks());
  }, []);

  return data;
};
