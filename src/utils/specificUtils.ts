// File name is probably subject to change

import { useLocation } from "react-router";

// Not sure if hooks should be here or not
export const useGetQueryValue = (queryKey: string): number => {
  const query = new URLSearchParams(useLocation().search);
  return parseInt(query.get(queryKey) || "1", 10);
};
