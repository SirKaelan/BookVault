import React from "react";
import { useNavigate, useSearchParams } from "react-router";

import {
  GridData,
  ExpandableText,
  ShowMoreButton,
  SocialLinks,
  AuthorWebsiteButton,
} from "@/components";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Wrap } from "@chakra-ui/react/wrap";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { Badge } from "@chakra-ui/react/badge";
import { Separator } from "@chakra-ui/react/separator";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";

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
              {author.awards.map((award, idx) => (
                <Badge
                  key={award}
                  size="md"
                  colorPalette={idx === 0 ? "yellow" : "blue"}
                >
                  {award}
                </Badge>
              ))}
              <Badge size="md" colorPalette="blue">
                {`${author.booksPublished} Books Published`}
              </Badge>
            </Wrap>
          </Flex>

          {/* Bio */}
          <ExpandableText>
            <ExpandableText.Content maxLines={9}>
              <Text whiteSpace="pre-wrap">{author.bio}</Text>
            </ExpandableText.Content>
            <ExpandableText.Button>
              {(isTextExpanded, handleButtonClick) => (
                <ShowMoreButton
                  onClick={handleButtonClick}
                  toggleState={isTextExpanded}
                />
              )}
            </ExpandableText.Button>
          </ExpandableText>

          <Separator />

          {/* Author bio data grid */}
          <GridData data={author.bioData} columns={2} itemsPerColumn={3} />

          <Separator />

          {/* Socials + Website */}
          <Flex justify="space-between" align="center">
            {/* FIXME: Design of social links needs a bit more work */}
            <SocialLinks data={author.links} />
            <AuthorWebsiteButton data={author.links}>
              Visit Website
            </AuthorWebsiteButton>
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
