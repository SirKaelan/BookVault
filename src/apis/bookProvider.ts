// Import dummy data
import { booksData, APIBookFormat } from "mockBooksData";
import { Book } from "contexts/books";
import { BookResponse, PaginatedBooksResponse } from "apis/types";
import { createArrayChunks } from "utils";

class BookProvider {
  // Might be used in the future
  private url: string = "";

  // Methods
  async getById(id: number): Promise<BookResponse> {
    const fetchedBook = booksData.find((x) => x.id === id);
    if (!fetchedBook) {
      return {
        type: "error",
        message: "Couldn't fetch book",
      };
    }
    const book: Book = { ...fetchedBook, type: "book" };
    return book;
  }

  async getPaginatedData(
    page: number,
    pageSize: number,
    searchTerm: string | null
  ): Promise<PaginatedBooksResponse> {
    let books: APIBookFormat[] | undefined = booksData;

    if (searchTerm) {
      books = this.filterBySearchTerm(searchTerm, booksData);

      if (!books) {
        return {
          type: "error",
          message: "Couldn't find any books with your search term",
        };
      }
    }

    const pageBooks = this.paginateDataForPage(books, page, pageSize);

    if (!pageBooks) {
      return {
        type: "error",
        message: "Couldn't fetch paginated books for this page",
      };
    }

    return {
      type: "pagination",
      data: pageBooks.data,
      pagination: {
        current_page: page,
        total_pages: pageBooks.total_pages,
      },
    };
  }

  // Temporary util methods
  private findDataChunk(
    chunkedData: APIBookFormat[][],
    page: number
  ): Book[] | undefined {
    const pageBooks: APIBookFormat[] | undefined = chunkedData[page - 1];
    return pageBooks
      ? pageBooks.map((x): Book => {
          return {
            ...x,
            type: "book",
          };
        })
      : undefined;
  }

  private paginateDataForPage(
    booksData: APIBookFormat[],
    page: number,
    pageSize: number
  ): { data: Book[]; total_pages: number } | undefined {
    const chunkedBooks = createArrayChunks<APIBookFormat>(booksData, pageSize);
    const pageBooks = this.findDataChunk(chunkedBooks, page);
    return pageBooks
      ? { data: pageBooks, total_pages: chunkedBooks.length }
      : undefined;
  }

  private filterBySearchTerm(
    searchTerm: string,
    booksData: APIBookFormat[]
  ): APIBookFormat[] | undefined {
    const filteredBooks = booksData.filter((x) =>
      // Filtering only by book title
      x.title.toLowerCase().includes(searchTerm)
    );
    return filteredBooks.length > 0 ? filteredBooks : undefined;
  }
}

export const bookProvider = new BookProvider();

export type BookAPI = {
  book_id: number;
  title: string;
  synopsis: string;
  cover_url: string | null;
  price: number;
};
