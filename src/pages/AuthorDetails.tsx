import React from "react";
import { useSearchParams } from "react-router";

import {
  GridData,
  ExpandableText,
  ShowMoreButton,
  SocialLinks,
  AuthorWebsiteButton,
  AuthorBookCard,
} from "@/components";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Wrap } from "@chakra-ui/react/wrap";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { Badge } from "@chakra-ui/react/badge";
import { Separator } from "@chakra-ui/react/separator";

import { useFetchAuthor } from "@/hooks";

export const AuthorDetails = (): React.JSX.Element => {
  const [searchParams] = useSearchParams();
  const authorId = parseInt(searchParams.get("id") || "1", 10);
  const author = useFetchAuthor(authorId);

  if (author.type === "loading") {
    return <div>Loading....</div>;
  }

  if (author.type === "error") {
    return <div>{author.message}</div>;
  }

  return (
    <Flex direction="column" gap="40">
      {/* Author info */}
      <Flex
        gap="10"
        align={{ base: "center", md: "start" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box flexShrink="0" rounded="sm" overflow="hidden">
          <Image
            w={{ base: "300px", md: "350px" }}
            src={author.image}
            alt="Author image"
            title="Author image"
          />
        </Box>
        <Flex direction="column" gap="8">
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
          <Box css={{ containerType: "inline-size" }}>
            <Flex
              justify="space-between"
              align="start"
              gap="4"
              css={{
                "@container (min-width: 0rem)": {
                  "&": { flexDirection: "column" },
                },
                "@container (min-width: 22rem)": {
                  "&": { flexDirection: "row", alignItems: "center" },
                },
              }}
            >
              <SocialLinks data={author.links} />
              <AuthorWebsiteButton alignSelf="end" data={author.links}>
                Visit Website
              </AuthorWebsiteButton>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      {/* Author books */}
      <Flex direction="column" gap="6">
        <Heading size="2xl">Books by {author.name}</Heading>
        <Wrap gap="8">
          {author.books.map((book) => (
            <AuthorBookCard key={book.id} data={book} />
          ))}
        </Wrap>
      </Flex>
    </Flex>
  );
};
