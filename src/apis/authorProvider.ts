import { Author, Book, Genre } from "contexts/books";
import { AuthorResponse } from "apis/types";
import axios, { AxiosError } from "axios";
import { BookAPI } from "apis/bookProvider";

class AuthorProvider {
  // Methods
  async getById(authorId: number): Promise<AuthorResponse> {
    try {
      const { data } = await axios.get<AuthorAPI>(
        `http://localhost:3001/authors/${authorId}`
      );
      const authorBooks = await this.getAuthorBooks(data);
      const author: Author = {
        type: "author",
        id: data.author_id,
        name: `${data.first_name} ${data.last_name}`,
        bio: data.bio,
        books: authorBooks,
      };
      return author;
    } catch (e) {
      const err = e as AxiosError;
      console.error(err);
      return {
        type: "error",
        message: "Couldn't fetch author data.",
      };
    }
  }

  private async getAuthorBooks(author: AuthorAPI): Promise<Book[]> {
    try {
      const authorBooks = await axios.get<AuthorBooksAPI>(
        `http://localhost:3001/authors/${author.author_id}/books`
      );
      const books: Book[] = await Promise.all(
        authorBooks.data.author_books.map(async (book): Promise<Book> => {
          const { data: bookGenres } = await axios.get<BookGenresAPI>(
            `http://localhost:3001/books/${book.book_id}/genres`
          );
          const convertedGenres: Genre[] = bookGenres.genres.map(
            (genre): Genre => {
              return {
                id: genre.genre_id,
                name: genre.genre_name,
              };
            }
          );
          return {
            type: "book",
            id: book.book_id,
            author_id: author.author_id,
            title: book.title,
            author_name: `${author.first_name} ${author.last_name}`,
            genres: convertedGenres,
            synopsis: book.synopsis,
            cover: book.cover_url,
            price: book.price,
          };
        })
      );
      return books;
    } catch (e) {
      const err = e as AxiosError;
      throw new AxiosError(err.message);
    }
  }
}

type AuthorAPI = {
  author_id: number;
  first_name: string;
  last_name: string;
  bio: string;
};

type AuthorBooksAPI = { author_books: BookAPI[] };

type GenreAPI = {
  genre_id: number;
  genre_name: string;
};

type BookGenresAPI = { genres: GenreAPI[] };

export const authorProvider = new AuthorProvider();
