import { Book, Author } from "contexts/books";
import { ErrorMessage, PaginatedBooksFormat } from "hooks/types";

// Book provider types
export type BookResponse = Book | ErrorMessage;
export type PaginatedBooksResponse = PaginatedBooksFormat | ErrorMessage;

// Author provider types
export type AuthorResponse = Author | ErrorMessage;
