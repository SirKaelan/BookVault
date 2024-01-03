// File name is probably subject to change

import { Location } from "react-router-dom";

// Not sure if hooks should be here or not
export const useGetPageNumber = (
  queryKey: string,
  useLocation: () => Location
): number => {
  // Not sure if i should be accepting the location hook like that
  const query = new URLSearchParams(useLocation().search);
  return parseInt(query.get(queryKey) || "1", 10);
};
