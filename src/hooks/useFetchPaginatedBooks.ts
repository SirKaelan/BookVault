import { useState, useEffect } from "react";

import { bookProvider } from "apis/bookProvider";
import { PaginatedBooksResult } from "hooks/types";

export const useFetchPaginatedBooks = (
  page: number,
  pageSize: number
): PaginatedBooksResult => {
  const [data, setData] = useState<PaginatedBooksResult>({ type: "loading" });

  useEffect(() => {
    bookProvider.getPaginatedData(page, pageSize).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return data;
};
