import type { Author, Book, PaginatedBooks } from "@/contexts/books";

export type Loading = { type: "loading" };
export type ErrorMessage = {
  type: "error";
  message: string;
};

// Book related types
export type BookStates = Book | ErrorMessage | Loading;

export type PaginatedBooksStates = PaginatedBooks | ErrorMessage | Loading;

// Author related types
export type AuthorStates = Author | ErrorMessage | Loading;
