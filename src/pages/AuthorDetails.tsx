import React from "react";

import { BookCard } from "@/components";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Wrap } from "@chakra-ui/react/wrap";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";

import { useGetQueryValue } from "@/utils";
import { useFetchAuthor } from "@/hooks";

export const AuthorDetails = (): React.JSX.Element => {
  // FIXME: Change query approach (don't use my hook)
  const authorId = useGetQueryValue("id");
  const author = useFetchAuthor(authorId);

  if (author.type === "loading") {
    return <div>Loading....</div>;
  }

  if (author.type === "error") {
    return <div>{author.message}</div>;
  }

  return (
    <Flex direction="column" gap="20">
      {/* Author info */}
      <Flex gap="10" align="start">
        <Box
          maxWidth="300px"
          rounded="sm"
          overflow="hidden"
        >
          <Image
            // FIXME: Add images to all author objects
            src="https://m.media-amazon.com/images/S/amzn-author-media-prod/o1ehbft4gejvtoskr22jt89eit._SY600_.jpg"
            alt="Author image"
            title="Author image"
          />
        </Box>
        <Flex flex="1" direction="column" gap="4">
          <Heading size="2xl">{author.name}</Heading>
          <Text>{author.bio}</Text>
        </Flex>
      </Flex>

      {/* Author books */}
      <Flex direction="column" gap="2">
        <Heading size="2xl">Author books</Heading>
        <Wrap gap="6">
          {/* FIXME: Temporary solution, the cards are too big */}
          {author.books.map((book) => <BookCard key={book.id} data={book} />)}
        </Wrap>
      </Flex>
    </Flex>
  );
};
