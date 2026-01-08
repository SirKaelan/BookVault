import React from "react";
import { useNavigate, useSearchParams } from "react-router";

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

import { useFetchAuthor } from "@/hooks";
import type { Book } from "@/contexts/books";

export const AuthorDetails = (): React.JSX.Element => {
  const [searchParams] = useSearchParams();
  const authorId = parseInt(searchParams.get("id") || "1", 10);
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

  // TODO: Make into a function
  const bioDataEntries = Object.entries(author.bioData);
  // FIXME: Swap these so that i change the number of columns
  const ITEMS_PER_COLUMN = 3;
  const COLUMNS = Math.ceil(bioDataEntries.length / ITEMS_PER_COLUMN);

  let columnIdxStart = 0;
  const authorBioData = [];
  for (let i = 0; i < COLUMNS; i++) {
    const colData = [];

    for (let j = 0; j < ITEMS_PER_COLUMN; j++) {
      const bioDataEntry: [string, string] | undefined =
        bioDataEntries[columnIdxStart + j];
      if (!bioDataEntry) break;

      // TODO: Take this into a config
      const synonymsDict: Record<string, string> = {
        birthday: "born",
      };

      const [key, value] = bioDataEntry;

      // split camelCase word into separate words
      const splitKey = key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();

      const colEntry = {
        key: synonymsDict[splitKey] || splitKey,
        value,
      };
      colData.push(colEntry);
    }
    columnIdxStart += ITEMS_PER_COLUMN;

    const colObj = {
      id: i,
      colData,
    };
    authorBioData.push(colObj);
  }

  console.log(authorBioData);

  return (
    <Flex direction="column" gap="40">
      {/* Author info */}
      <Flex
        gap="10"
        align={{ base: "center", md: "start" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box maxWidth="300px" rounded="sm" overflow="hidden">
          <Image src={author.image} alt="Author image" title="Author image" />
        </Box>

        <Flex flex="1" direction="column" gap="8">
          {/* Name + Badges */}
          <Flex gap="4" direction="column">
            <Heading size="4xl">{author.name}</Heading>
            <Wrap gap="2">
              {author.awards.map((award, idx, arr) => (
                <React.Fragment key={award}>
                  <Badge size="md" colorPalette={idx === 0 ? "yellow" : "blue"}>
                    {award}
                  </Badge>
                  {idx === arr.length - 1 && (
                    <Badge size="md" colorPalette="blue">
                      {`${author.booksPublished} Books Published`}
                    </Badge>
                  )}
                </React.Fragment>
              ))}
              {/* <Badge size="md" colorPalette="yellow">
                New York Times Bestseller
              </Badge>
              <Badge size="md" colorPalette="blue">
                Award-Winning Author
              </Badge>
              <Badge size="md" colorPalette="blue">
                75+ Published Books
              </Badge> */}
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
            {authorBioData.map((col) => (
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
