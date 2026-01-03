import React from "react";
import { useNavigate } from "react-router";

import { BookCard } from "@/components";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Wrap } from "@chakra-ui/react/wrap";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { Badge } from "@chakra-ui/react/badge";
import { Grid } from "@chakra-ui/react/grid";
import { Button, IconButton } from "@chakra-ui/react/button";
import { Link } from "@chakra-ui/react/link";
import { Icon } from "@chakra-ui/react/icon";
import { Separator } from "@chakra-ui/react/separator";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";

import { LuExternalLink } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { useGetQueryValue } from "@/utils";
import { useFetchAuthor } from "@/hooks";
import type { Book } from "@/contexts/books";

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
  },
];

export const AuthorDetails = (): React.JSX.Element => {
  // FIXME: Change query approach (don't use my hook)
  const authorId = useGetQueryValue("id");
  const author = useFetchAuthor(authorId);
  const navigate = useNavigate();

  if (author.type === "loading") {
    return <div>Loading....</div>;
  }

  if (author.type === "error") {
    return <div>{author.message}</div>;
  }

  const handleBookClick = (book: Book) => {
    navigate({ pathname: "/book", search: `?id=${book.id}` });
  };

  return (
    <Flex direction="column" gap="40">
      {/* Author info */}
      <Flex
        gap="10"
        align={{ base: "center", md: "start" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box maxWidth="300px" rounded="sm" overflow="hidden">
          <Image
            // FIXME: Add images to all author objects
            src="https://m.media-amazon.com/images/S/amzn-author-media-prod/o1ehbft4gejvtoskr22jt89eit._SY600_.jpg"
            alt="Author image"
            title="Author image"
          />
        </Box>

        <Flex flex="1" direction="column" gap="8">
          {/* Name + Badges */}
          <Flex gap="4" direction="column">
            <Heading size="4xl">{author.name}</Heading>
            <Wrap gap="2">
              <Badge size="md" colorPalette="yellow">
                New York Times Bestseller
              </Badge>
              <Badge size="md" colorPalette="blue">
                Award-Winning Author
              </Badge>
              <Badge size="md" colorPalette="blue">
                75+ Published Books
              </Badge>
            </Wrap>
          </Flex>

          {/* Bio */}
          {/* FIXME: Add the read more button and increase bio text length */}
          <Text>{author.bio}</Text>

          <Separator />

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

          <Separator />

          {/* Socials + Website */}
          {/* FIXME: Design needs a bit more work */}
          <Flex justify="space-between" align="center">
            <Flex gap="4">
              <IconButton
                asChild
                aria-label="Open author X account"
                variant="outline"
                rounded="full"
              >
                <Link href="#">
                  <FaXTwitter />
                </Link>
              </IconButton>

              <IconButton
                asChild
                aria-label="Open author facebook account"
                variant="outline"
                rounded="full"
              >
                <Link href="#">
                  <FaFacebook />
                </Link>
              </IconButton>

              <IconButton
                asChild
                aria-label="Open author instagram account"
                variant="outline"
                rounded="full"
              >
                <Link href="#">
                  <FaInstagram />
                </Link>
              </IconButton>
            </Flex>

            <Button
              asChild
              colorPalette="blue"
              variant="solid"
              size="xl"
              letterSpacing="wider"
            >
              <Link href="#">
                Visit Website
                <Icon>
                  <LuExternalLink />
                </Icon>
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Author books */}
      {/* FIXME: Maybe book cards should show more info */}
      <Flex direction="column" gap="6">
        <Heading size="2xl">Books by {author.name}</Heading>
        <Wrap gap="5">
          {author.books.map((book) => (
            <Box
              key={book.id}
              rounded="sm"
              shadow="lg"
              overflow="hidden"
              transition="transform 0.125s ease-in-out"
              _hover={{ transform: "translateY(-0.5rem)", cursor: "pointer" }}
              onClick={() => handleBookClick(book)}
            >
              <AspectRatio minW="200px" ratio={1 / 1.6}>
                <Image
                  src={book.cover ? book.cover : ""}
                  title={`'${book.title}' cover`}
                  alt={`'${book.title}' cover`}
                />
              </AspectRatio>
            </Box>
          ))}
        </Wrap>
      </Flex>
    </Flex>
  );
};
