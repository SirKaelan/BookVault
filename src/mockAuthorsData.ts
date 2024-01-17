import { APIBookFormat, booksData } from "mockBooksData";

export enum AuthorIds {
  BrandonSanderson = 1,
  BrentWeeks = 2,
  BrianMcClellan = 3,
}

export type APIAuthorFormat = {
  id: number;
  name: string;
  books: APIBookFormat[];
  bio: string;
};

export const authorsData: APIAuthorFormat[] = [
  {
    id: 1,
    name: "Brandon Sanderson",
    books: booksData.filter((x) => x.author === "Brandon Sanderson"),
    bio: "Very nice beard",
  },
  {
    id: 2,
    name: "Brent Weeks",
    books: booksData.filter((x) => x.author === "Brent Weeks"),
    bio: "Cool guy probably",
  },
  {
    id: 3,
    name: "Brian McClellan",
    books: booksData.filter((x) => x.author === "Brian McClellan"),
    bio: "Has some nice books",
  },
];
