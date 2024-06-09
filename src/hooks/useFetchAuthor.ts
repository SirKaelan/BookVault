import { useState, useEffect } from "react";
import { authorProvider } from "apis/authorProvider";
import { AuthorResult } from "hooks/types";

export const useFetchAuthor = (id: number): AuthorResult => {
  const [data, setData] = useState<AuthorResult>({ type: "loading" });

  useEffect(() => {
    authorProvider.getById(id).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
