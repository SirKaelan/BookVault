import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

import { GridData } from "@/components";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Wrap } from "@chakra-ui/react/wrap";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { Badge } from "@chakra-ui/react/badge";
import { Button, IconButton } from "@chakra-ui/react/button";
import { Link } from "@chakra-ui/react/link";
import { Icon } from "@chakra-ui/react/icon";
import { Separator } from "@chakra-ui/react/separator";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";

import { LuExternalLink, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { useFetchAuthor } from "@/hooks";
import type { Book } from "@/contexts/books";

export const AuthorDetails = (): React.JSX.Element => {
  const [isTextExpanded, setIsTextExpanded] = useState<boolean>(false);
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

  const handleExpandClick = () => {
    setIsTextExpanded((prev) => !prev);
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
          {/* FIXME: Try to fix this a bit? */}
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
            </Wrap>
          </Flex>

          {/* Bio */}
          {/* TODO: Make into a component */}
          <Flex direction="column" alignItems="start" gap="3">
            <Text whiteSpace="pre-wrap" lineClamp={isTextExpanded ? "0" : "9"}>
              {author.bio}
            </Text>
            <Button
              variant="ghost"
              color="gray.600"
              h="auto"
              gap="1"
              p="0"
              rounded="none"
              _hover={{
                borderBottom: "1px solid gray",
                bgColor: "transparent",
              }}
              onClick={handleExpandClick}
            >
              Show {isTextExpanded ? "less" : "more"}
              <Icon p="0">
                {isTextExpanded ? <LuChevronUp /> : <LuChevronDown />}
              </Icon>
            </Button>
          </Flex>

          <Separator />

          {/* Author bio data grid */}
          <GridData data={author.bioData} columns={2} itemsPerColumn={3} />

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
