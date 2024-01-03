import { useState } from "react";

import { booksData } from "mockBooksData";

export const useFetchBooks = <T>(url: string) => {
  const [books, setBooks] = useState<T | null>(null);
  // Might change to "status"?
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // Actual fetching logic will later be here
  const fetchBooks = async () => console.log("fetchBooks executed.");
  return { booksData, isLoading, error, fetchBooks };
};
