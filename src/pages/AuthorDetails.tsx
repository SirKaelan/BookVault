import { useGetQueryValue } from "utils";

export const AuthorDetails = (): JSX.Element => {
  const authorId = useGetQueryValue("id");

  return <div>Author id: {authorId}</div>;
};
