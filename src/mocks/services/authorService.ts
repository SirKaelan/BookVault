import type { AuthorStates } from "@/hooks/types";
import { mockAuthors } from "@/mocks/data/authors";

export const getMockAuthorById = (id: number): AuthorStates => {
  const foundAuthor = mockAuthors.find((a) => a.id === id);

  if (!foundAuthor) {
    return {
      type: "error",
      message: "Author could not be found.",
    };
  }

  return { ...foundAuthor };
};
