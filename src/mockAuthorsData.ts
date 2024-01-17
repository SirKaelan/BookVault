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
    books: booksData.filter((x) => x.author === "Brandon Sanderson"),
    bio: "Very nice beard",
  },
  {
    id: AuthorIds.BrentWeeks,
    name: "Brent Weeks",
    books: booksData.filter((x) => x.author === "Brent Weeks"),
    bio: "Cool guy probably",
  },
  {
    id: AuthorIds.BrianMcClellan,
    name: "Brian McClellan",
    books: booksData.filter((x) => x.author === "Brian McClellan"),
    bio: "Has some nice books",
  },
];
