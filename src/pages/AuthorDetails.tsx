import React from "react";

import { BookCard } from "@/components";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Wrap } from "@chakra-ui/react/wrap";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { Badge } from "@chakra-ui/react/badge";
import { Grid } from "@chakra-ui/react/grid";

import { useGetQueryValue } from "@/utils";
import { useFetchAuthor } from "@/hooks";

// TODO: Move to mock data
const authorMetadata = [
  {
    id: 1,
    colData: [
      { key: "Born", value: "YYYY-MM-DD" },
      { key: "Birthplace", value: "Blabla, blabla, blabla" },
      { key: "Current residence", value: "Blabla, blabla" },
    ],
  },
  {
    id: 2,
    colData: [
      { key: "Education", value: "Some institute" },
      { key: "Genres", value: "blabla, blabla, blabla" },
      { key: "Interests", value: "Blabla, blabla, more bla bla" },
    ],
  }
]

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

        <Flex flex="1" direction="column" gap="10">
          {/* Name + Badges */}
          <Flex gap="4" direction="column">
            <Heading size="4xl">{author.name}</Heading>
            <Flex gap="2">
              <Badge size="md" colorPalette="yellow">New York Times Bestseller</Badge>
              <Badge size="md" colorPalette="blue">Award-Winning Author</Badge>
              <Badge size="md" colorPalette="blue">75+ Published Books</Badge>
            </Flex>
          </Flex>

          {/* Bio */}
          <Text>{author.bio}</Text>

          {/* Author metadata */}
          {/* FIXME: This is the same as "product details", make a component */}
          <Grid
            templateColumns={{
              base: "max-content 1fr",
              md: "repeat(2, max-content 1fr)",
            }}
            columnGap="7"
            rowGap="2"
          >
            {authorMetadata.map((col) => (
              <Grid
                key={col.id}
                gridColumn="span 2"
                templateColumns="subgrid"
                rowGap="2"
              >
                {col.colData.map((dataPair) => (
                  <React.Fragment key={dataPair.key}>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      {dataPair.key}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {dataPair.value}
                    </Text>
                  </React.Fragment>
                ))}
              </Grid>
            ))}
          </Grid>
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
