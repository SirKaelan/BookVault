import { APIAuthorFormat, authorsData } from "mockAuthorsData";
import { Author, Book } from "contexts/books";
import { AuthorResponse } from "apis/types";

class AuthorProvider {
  // Methods
  async getById(id: number): Promise<AuthorResponse> {
    const fetchedAuthor = authorsData.find((x) => x.id === id);
    if (!fetchedAuthor) {
      return {
        type: "error",
        message: "Couldn't fetch author",
      };
    }
    return this.fixAuthorTypes(fetchedAuthor);
  }

  // Temporary util methods
  private fixAuthorTypes(author: APIAuthorFormat): Author {
    const updatedAuthorBooks: Book[] = author.books.map<Book>((x) => {
      return {
        ...x,
        type: "book",
      };
    });
    return { ...author, type: "author", books: updatedAuthorBooks };
  }
}

export const authorProvider = new AuthorProvider();
