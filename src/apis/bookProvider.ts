// Import dummy data
import { booksData, APIBookFormat } from "mockBooksData";
import { Book } from "contexts/books";
import { BookResponse, PaginatedBooksResponse } from "apis/types";
import { createArrayChunks } from "utils";

class BookProvider {
  private url: string = "";

  // Methods
  async getAll(): Promise<Book[]> {
    // Fetching logic goes here
    // Make a delay here
    const editedBooksData: Book[] = booksData.map((x): Book => {
      return { ...x, type: "book" };
    });
    return editedBooksData;
  }

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

  // Temporary method
  // TODO: Fix edge case (page number is too high)
  private findDataChunk(chunkedData: APIBookFormat[][], page: number): Book[] {
    return chunkedData[page - 1]?.map((x): Book => {
      return {
        ...x,
        type: "book",
      };
    });
  }

  async getPaginatedData(
    page: number,
    pageSize: number
  ): Promise<PaginatedBooksResponse> {
    const chunkedData: APIBookFormat[][] = createArrayChunks<APIBookFormat>(
      booksData,
      pageSize
    );
    const pageBooks: Book[] = this.findDataChunk(chunkedData, page);
    if (!pageBooks) {
      return {
        type: "error",
        message: "Couldn't fetch paginated books",
      };
    }

    return {
      type: "pagination",
      data: pageBooks,
      pagination: {
        current_page: page,
        total_pages: chunkedData.length,
      },
    };
  }
}

export const bookProvider = new BookProvider();
