import { Author, Book } from "contexts/books";

export type Loading = { type: "loading" };
export type ErrorMessage = {
  type: "error";
  message: string;
};

// Book related types
export type BookResult = Book | ErrorMessage | Loading;

export type PaginatedBooksFormat = {
  type: "pagination";
  data: Book[];
  pagination: {
    current_page: number;
    total_pages: number;
  };
};
export type PaginatedBooksResult =
  | PaginatedBooksFormat
  | ErrorMessage
  | Loading;

// Author related types
export type AuthorResult = Author | ErrorMessage | Loading;
