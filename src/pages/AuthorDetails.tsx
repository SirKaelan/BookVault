import { useGetQueryValue } from "utils";
import { useFetchAuthor } from "hooks";

export const AuthorDetails = (): JSX.Element => {
  const authorId = useGetQueryValue("id");
  const author = useFetchAuthor(authorId);

  if (author.type === "loading") {
    return <div>Loading....</div>;
  }

  if (author.type === "error") {
    return <div>{author.message}</div>;
  }

  return (
    <div>
      <>
        Author: {author.name}, Bio: {author.bio}
        <br></br>
        <br></br>
        Books:{" "}
        {author.books.map((book) => {
          return (
            <div key={book.id}>
              <div>Title: {book.title}</div>
              <div>
                Genres:{" "}
                {book.genres.length !== 0
                  ? book.genres.map((genre, i) => [i > 0 && ", ", genre.name])
                  : "No genres."}
              </div>
              <div>Price: {book.price}</div>
              <br></br>
            </div>
          );
        })}
      </>
    </div>
  );
};
