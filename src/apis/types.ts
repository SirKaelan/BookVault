import { Book } from "contexts/books";
import { ErrorMessage, PaginatedBooksFormat } from "hooks/types";

export type BookResponse = Book | ErrorMessage;
export type PaginatedBooksResponse = PaginatedBooksFormat | ErrorMessage;
