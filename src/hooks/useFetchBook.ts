import { useState, useEffect } from "react";

import { bookProvider } from "apis/bookProvider";
import { BookResult } from "hooks/types";

export const useFetchBook = (id: number): BookResult => {
  const [data, setData] = useState<BookResult>({ type: "loading" });

  useEffect(() => {
    bookProvider.getById(id).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
