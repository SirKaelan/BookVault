import React from "react";

import type {
  BookContextType,
  BookProviderProps,
  BookState,
} from "@/contexts/books/types";
import { bookReducer } from "@/contexts/books/reducer";

const INITIAL_STATE: BookState = {
  books: [],
};

export const BookContext = React.createContext<BookContextType>(undefined);

export const BookProvider = ({
  children,
}: BookProviderProps): React.JSX.Element => {
  const [state, dispatch] = React.useReducer(bookReducer, INITIAL_STATE);
  const contextValue = { state, dispatch };
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
