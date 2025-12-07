import type { Book, PaginatedBooks } from "@/contexts/books";
import { mockBooks } from "@/mocks/data/books";
import { paginateMock } from "@/mocks/utils";

export const getAuthorMockBooks = (authorId: number, mockBooks: Book[]) => {
  return mockBooks.filter((b) => b.author_id === authorId);
};

export const getPaginatedMockBooks = (
  page: number,
  pageSize: number,
  searchTerm: string | null
): PaginatedBooks => {
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

// TODO: This has to return the proper types
export const getMockBookById = (id: number) => {
  return mockBooks.find((b) => b.id === id) as Book;
};
