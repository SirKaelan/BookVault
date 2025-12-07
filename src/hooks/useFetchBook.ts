import { useState, useEffect } from "react";

import { bookProvider } from "@/apis/bookProvider";
import type { BookStates } from "@/hooks/types";
import { getMockBookById } from "@/mocks";

export const useFetchBook = (id: number): BookStates => {
  const [data, setData] = useState<BookStates>({ type: "loading" });

  // useEffect(() => {
  //   bookProvider.getById(id).then((data) => setData(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setData(getMockBookById(id));
  }, []);

  return data;
};
