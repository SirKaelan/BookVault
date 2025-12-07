import type { Book } from "@/contexts/books";
import type { BookStates, PaginatedBooksStates } from "@/hooks/types";
import { mockBooks } from "@/mocks/data/books";
import { paginateMock } from "@/mocks/utils";

export const getAuthorMockBooks = (authorId: number, mockBooks: Book[]) => {
  return mockBooks.filter((b) => b.author_id === authorId);
};

export const getPaginatedMockBooks = (
  page: number,
  pageSize: number,
  searchTerm: string | null
): PaginatedBooksStates => {
  let mockBooksArr = mockBooks;

  // filter mock books by book title (fuzzy find)
  if (searchTerm) {
    const filteredBooksByTitle = mockBooks.filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    mockBooksArr = filteredBooksByTitle;
  }

  const paginator = paginateMock(mockBooksArr, page, pageSize);

  return {
    type: "pagination",
    data: paginator.mockData,
    pagination: {
      current_page: paginator.currentPage,
      previous_page: paginator.previousPage,
      next_page: paginator.nextPage,
      total_pages: paginator.totalPages,
      total_books: paginator.totalItems,
    },
  };
};

export const getMockBookById = (id: number): BookStates => {
  const foundBook = mockBooks.find((b) => b.id === id);

  if (!foundBook) {
    return {
      type: "error",
      message: "Book could not be found.",
    };
  }

  return { ...foundBook };
};
