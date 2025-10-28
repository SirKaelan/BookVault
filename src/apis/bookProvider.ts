import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig } from "axios";
import type { Book, Genre, PaginatedBooks } from "contexts/books";
import type { BookResponse, PaginatedBooksResponse } from "apis/types";

export class BookProvider {
  private url: string = "http://localhost:3001";

  // Methods
  async getById(bookId: number): Promise<BookResponse> {
    try {
      const { data } = await axios.get<BookAPI>(`${this.url}/books/${bookId}`);
      const genres = await this.getGenres(bookId);
      const convertedBook: Book = {
        type: "book",
        id: data.book_id,
        author_id: data.author_id,
        title: data.title,
        author_name: `${data.author_fn} ${data.author_ln}`,
        genres,
        synopsis: data.synopsis,
        cover: data.cover_url,
        price: data.price,
      };
      return convertedBook;
    } catch (e) {
      const err = e as AxiosError;
      console.error(err);
      return {
        type: "error",
        message: "Couldn't fetch book.",
      };
    }
  }

  async getPaginatedBooks(
    page: number,
    pageItems: number,
    searchTerm: string | null
  ): Promise<PaginatedBooksResponse> {
    const url = `${this.url}/books`;
    const axiosConfig: AxiosRequestConfig = {
      params: {
        page,
        limit: pageItems,
      },
    };
    if (searchTerm) axiosConfig.params["title"] = searchTerm;
    try {
      const { data: response } = await axios.get<PaginatedBooksAPI>(
        url,
        axiosConfig
      );
      const convertedBooks = await this.convertBooks(response.data);
      const convertedResponse: PaginatedBooks = {
        type: "pagination",
        data: convertedBooks,
        pagination: {
          previous_page: response.previous_page,
          current_page: response.current_page,
          next_page: response.next_page,
          total_pages: response.total_pages,
          total_books: response.total_books,
        },
      };
      return convertedResponse;
    } catch (e) {
      const err = e as AxiosError;
      console.error(err);
      return {
        type: "error",
        message: "Couldn't fetch paginated books.",
      };
    }
  }

  async getAuthorBooks(authorId: number): Promise<Book[]> {
    try {
      const authorBooks = await axios.get<AuthorBooksAPI>(
        `${this.url}/authors/${authorId}/books`
      );
      const convertedAuthorBooks: Book[] = await this.convertBooks(
        authorBooks.data.author_books
      );
      return convertedAuthorBooks;
    } catch (e) {
      const err = e as AxiosError;
      throw new AxiosError(err.message);
    }
  }

  async getGenres(bookId: number): Promise<Genre[]> {
    try {
      const { data: bookGenres } = await axios.get<BookGenresAPI>(
        `${this.url}/books/${bookId}/genres`
      );
      const convertedGenres: Genre[] = bookGenres.genres.map((genre): Genre => {
        return {
          id: genre.genre_id,
          name: genre.genre_name,
        };
      });
      return convertedGenres;
    } catch (e) {
      const err = e as AxiosError;
      throw new AxiosError(err.message);
    }
  }

  private async convertBooks(apiBooks: BookAPI[]): Promise<Book[]> {
    const convertedBooks = await Promise.all(
      apiBooks.map(async (book): Promise<Book> => {
        const convertedGenres: Genre[] = await this.getGenres(book.book_id);
        return {
          type: "book",
          id: book.book_id,
          author_id: book.author_id,
          title: book.title,
          author_name: `${book.author_fn} ${book.author_ln}`,
          genres: convertedGenres,
          synopsis: book.synopsis,
          cover: book.cover_url,
          price: book.price,
        };
      })
    );
    return convertedBooks;
  }
}

type BookAPI = {
  book_id: number;
  title: string;
  synopsis: string;
  cover_url: string | null;
  price: number;
  author_id: number;
  author_fn: string;
  author_ln: string;
};

type AuthorBooksAPI = { author_books: BookAPI[] };

type GenreAPI = {
  genre_id: number;
  genre_name: string;
};

type BookGenresAPI = { genres: GenreAPI[] };

type PaginatedBooksAPI = {
  data: BookAPI[];
  total_books: number;
  current_page: number;
  previous_page: number | null;
  next_page: number | null;
  total_pages: number;
};

export const bookProvider = new BookProvider();
