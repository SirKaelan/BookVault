import React from "react";
import { BookContext } from "@/contexts/books/bookContext";
import { BookActionType } from "@/contexts/books/types";
import type { Book } from "@/contexts/books/types";

export const useBookState = () => {
  const context = React.useContext(BookContext);

  if (context === undefined) {
    throw new Error("BookState hook must be used within a BookProvider");
  }

  const {
    state: { books },
    dispatch,
  } = context;

  return {
    books,
    add: (payload: Book) =>
      dispatch({ type: BookActionType.ADD_BOOK, payload }),
    edit: (payload: Book) =>
      dispatch({ type: BookActionType.EDIT_BOOK, payload }),
    remove: (payload: Book) =>
      dispatch({ type: BookActionType.REMOVE_BOOK, payload }),
    overrideBooks: (payload: Book[]) =>
      dispatch({ type: BookActionType.ADD_BOOKS, payload }),
  };
};
