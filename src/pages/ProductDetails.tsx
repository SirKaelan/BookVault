import React from "react";
import { useGetQueryValue } from "utils";
import { useLocation } from "react-router-dom";
import { useFetchBook } from "hooks";

export const ProductDetails = (): JSX.Element => {
  const bookId = useGetQueryValue("id", useLocation);
  const book = useFetchBook(bookId);

  console.log(book);

  switch (book.type) {
    case "loading":
      return <div>Loading....</div>;
    case "error":
      return <div>{book.message}</div>;
    default:
      return (
        <div>
          Book title: {book.title}, Author: {book.author}
        </div>
      );
  }
};
