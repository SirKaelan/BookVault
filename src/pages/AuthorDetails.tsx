import { useGetQueryValue } from "utils";
import { useFetchAuthor } from "hooks";

export const AuthorDetails = (): JSX.Element => {
  const authorId = useGetQueryValue("id");
  const author = useFetchAuthor(authorId);

  console.log(author);

  if (author.type === "loading") {
    return <div>Loading....</div>;
  }

  if (author.type === "error") {
    return <div>{author.message}</div>;
  }

  return (
    <div>
      Author: {author.name}, Bio: {author.bio}
    </div>
  );
};
