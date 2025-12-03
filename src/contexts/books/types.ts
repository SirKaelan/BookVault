import React from "react";

export enum BookActionType {
  ADD_BOOK = "ADD_BOOK",
  ADD_BOOKS = "ADD_BOOKS",
  REMOVE_BOOK = "REMOVE_BOOK",
  EDIT_BOOK = "EDIT_BOOK",
}

export type BookContextType =
  | {
      state: BookState;
      dispatch: React.Dispatch<BookAction>;
    }
  | undefined;

export type BookProviderProps = {
  children: React.JSX.Element;
};

export type Book = {
  type: "book";
  id: number;
  author_id: number;
  title: string;
  author_name: string;
  genres: Genre[];
  synopsis: string;
  cover: string | null;
  price: number;
};

export type BookState = {
  books: Book[];
};

export type UpdateBookAction = {
  type:
    | BookActionType.ADD_BOOK
    | BookActionType.EDIT_BOOK
    | BookActionType.REMOVE_BOOK;
  payload: Book;
};

type APIDataAction = {
  type: BookActionType.ADD_BOOKS;
  payload: Book[];
};

export type BookAction = UpdateBookAction | APIDataAction;

// Not sure where to put this type
export type Author = {
  type: "author";
  id: number;
  name: string;
  bio: string;
  books: Book[];
};

export type Genre = {
  id: number;
  name: string;
};

export type PaginatedBooks = {
  type: "pagination";
  data: Book[];
  pagination: {
    previous_page: number | null;
    current_page: number;
    next_page: number | null;
    total_pages: number;
    total_books: number;
  };
};
