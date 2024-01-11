export enum BookActionType {
  ADD_BOOK = "ADD_BOOK",
  ADD_BOOKS = "ADD_BOOKS",
  REMOVE_BOOK = "REMOVE_BOOK",
  EDIT_BOOK = "EDIT_BOOK",
}

export type BookContextType =
  | {
      state: BookState;
      dispatch: React.Dispatch<BookAction>;
    }
  | undefined;

export type BookProviderProps = {
  children: JSX.Element;
};

export type Book = {
  type: "book";
  id: number;
  title: string;
  author: string;
  genres: string[];
  synopsis: string;
  cover: string;
};

export type BookState = {
  books: Book[];
};

export type UpdateBookAction = {
  type:
    | BookActionType.ADD_BOOK
    | BookActionType.EDIT_BOOK
    | BookActionType.REMOVE_BOOK;
  payload: Book;
};

type APIDataAction = {
  type: BookActionType.ADD_BOOKS;
  payload: Book[];
};

export type BookAction = UpdateBookAction | APIDataAction;
