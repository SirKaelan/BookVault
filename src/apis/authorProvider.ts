import axios, { AxiosError } from "axios";
import { Author } from "contexts/books";
import { AuthorResponse } from "apis/types";
import { BookProvider } from "apis/bookProvider";

class AuthorProvider {
  private url: string = "http://localhost:3001";
  private bookProvider: BookProvider;

  constructor() {
    this.bookProvider = new BookProvider();
  }

  // Methods
  async getById(authorId: number): Promise<AuthorResponse> {
    try {
      const { data } = await axios.get<AuthorAPI>(
        `${this.url}/authors/${authorId}`
      );
      const authorBooks = await this.bookProvider.getAuthorBooks(authorId);
      const convertedAuthor: Author = {
        type: "author",
        id: data.author_id,
        name: `${data.first_name} ${data.last_name}`,
        bio: data.bio,
        books: authorBooks,
      };
      return convertedAuthor;
    } catch (e) {
      const err = e as AxiosError;
      console.error(err);
      return {
        type: "error",
        message: "Couldn't fetch author data.",
      };
    }
  }
}

type AuthorAPI = {
  author_id: number;
  first_name: string;
  last_name: string;
  bio: string;
};

export const authorProvider = new AuthorProvider();
