import type { Book, Author, PaginatedBooks } from "@/contexts/books";
import type { ErrorMessage } from "@/hooks/types";

// Book provider types
export type BookResponse = Book | ErrorMessage;
export type PaginatedBooksResponse = PaginatedBooks | ErrorMessage;

// Author provider types
export type AuthorResponse = Author | ErrorMessage;
