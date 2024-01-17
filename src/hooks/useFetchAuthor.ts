import { useState, useEffect } from "react";
import { authorProvider } from "apis/authorProvider";

// TODO: Create AuthorResult type
export const useFetchAuthor = (id: number) => {
  const [data, setData] = useState<number>(0);

  useEffect(() => {
    authorProvider.getById(id).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
