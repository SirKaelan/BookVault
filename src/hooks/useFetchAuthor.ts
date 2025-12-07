import { useState, useEffect } from "react";
import { authorProvider } from "@/apis/authorProvider";
import type { AuthorStates } from "@/hooks/types";
import { getMockAuthorById } from "@/mocks";

export const useFetchAuthor = (id: number): AuthorStates => {
  const [data, setData] = useState<AuthorStates>({ type: "loading" });

  // useEffect(() => {
  //   authorProvider.getById(id).then((data) => setData(data));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setData(getMockAuthorById(id));
  }, []);

  return data;
};
