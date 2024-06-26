import { useGetQueryValue } from "utils";
import { useFetchBook } from "hooks";

export const ProductDetails = (): JSX.Element => {
  const bookId = useGetQueryValue("id");
  const book = useFetchBook(bookId);

  if (book.type === "loading") {
    return <div>Loading....</div>;
  }

  if (book.type === "error") {
    return <div>{book.message}</div>;
  }

  return (
    <div>
      Book title: {book.title}, Author: {book.author_name}
    </div>
  );
};
