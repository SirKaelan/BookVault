import React from "react";

import { BookContextType, BookProviderProps, BookState } from "./types";
import { bookReducer } from "./reducer";

const INITIAL_STATE: BookState = {
  books: [],
};

export const BookContext = React.createContext<BookContextType>(undefined);

export const BookProvider = ({ children }: BookProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(bookReducer, INITIAL_STATE);
  const contextValue = { state, dispatch };
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
