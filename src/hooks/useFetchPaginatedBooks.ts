import { useState, useEffect } from "react";

import { bookProvider } from "apis/bookProvider";
import { PaginatedBooksStates } from "hooks/types";

export const useFetchPaginatedBooks = (
  page: number,
  pageSize: number,
  searchTerm: string | null
): PaginatedBooksStates => {
  const [data, setData] = useState<PaginatedBooksStates>({ type: "loading" });

  useEffect(() => {
    bookProvider
      .getPaginatedBooks(page, pageSize, searchTerm)
      .then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, page]);

  return data;
};
