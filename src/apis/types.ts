import { Book } from "contexts/books";
import { PaginatedBooksFormat, ErrorMessage } from "hooks/types";

export type BookResponse = Book | ErrorMessage;
export type PaginatedBooksResponse = PaginatedBooksFormat | ErrorMessage;
