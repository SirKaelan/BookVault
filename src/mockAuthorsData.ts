import { APIBookFormat, booksData } from "mockBooksData";
import { AuthorIds } from "authorsIdsEnum";

export type APIAuthorFormat = {
  id: number;
  name: string;
  books: APIBookFormat[];
  bio: string;
};

export const authorsData: APIAuthorFormat[] = [
  {
    id: AuthorIds.BrandonSanderson,
    name: "Brandon Sanderson",
    books: booksData.filter((x) => x.author_name === "Brandon Sanderson"),
    bio: "Very nice beard",
  },
  {
    id: AuthorIds.BrentWeeks,
    name: "Brent Weeks",
    books: booksData.filter((x) => x.author_name === "Brent Weeks"),
    bio: "Cool guy probably",
  },
  {
    id: AuthorIds.BrianMcClellan,
    name: "Brian McClellan",
    books: booksData.filter((x) => x.author_name === "Brian McClellan"),
    bio: "Has some nice books",
  },
];
