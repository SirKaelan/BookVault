import { BookAction, BookActionType, BookState } from "./types";

export const bookReducer = (
  state: BookState,
  action: BookAction
): BookState => {
  switch (action.type) {
    case BookActionType.ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case BookActionType.EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    case BookActionType.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    case BookActionType.ADD_BOOKS:
      return { ...state, books: action.payload };
    default:
      throw new Error("Unhandled action type in book reducer!");
  }
};
