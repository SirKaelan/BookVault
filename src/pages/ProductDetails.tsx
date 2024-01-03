import React from "react";
import { useGetQueryValue } from "utils";
import { useLocation } from "react-router-dom";
import { useBookState } from "contexts/books";

export const ProductDetails = (): JSX.Element => {
  const { books } = useBookState();
  const bookId = useGetQueryValue("id", useLocation);

  console.log(books.filter((x) => x.id === bookId));

  return <div>Book id: {bookId}</div>;
};
