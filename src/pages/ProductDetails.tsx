import React, { useState } from "react";

import { ExpandableText, ShowMoreButton, GridData } from "@/components";

import { useNavigate } from "react-router";
import { useFetchBook } from "@/hooks";

import { HStack } from "@chakra-ui/react/stack";
import { Image } from "@chakra-ui/react/image";
import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";
import { Heading } from "@chakra-ui/react/heading";
import { Text } from "@chakra-ui/react/text";
import { RatingGroup } from "@chakra-ui/react/rating-group";
import { Button, IconButton } from "@chakra-ui/react/button";
import { Icon } from "@chakra-ui/react/icon";
import { Separator } from "@chakra-ui/react/separator";
import { Badge } from "@chakra-ui/react/badge";
import { NumberInput } from "@chakra-ui/react/number-input";
import { Field } from "@chakra-ui/react/field";
import { Link } from "@chakra-ui/react/link";

import { LuMinus, LuPlus, LuShoppingCart } from "react-icons/lu";
import { useSearchParams } from "react-router";

export const ProductDetails = (): React.JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookId = parseInt(searchParams.get("id") || "1", 10);
  const book = useFetchBook(bookId);

  if (book.type === "loading") {
    return <div>Loading....</div>;
  }

  if (book.type === "error") {
    return <div>{book.message}</div>;
  }

  const handleAuthorClick = () => {
    navigate({ pathname: "/author", search: `?id=${book.author_id}` });
  };

  return (
    <Flex
      gap="10"
      // FIXME: Tons more work on making this properly responsive
      align={{ base: "center", md: "start" }}
      direction={{ base: "column", md: "row" }}
    >
      {/* Book cover */}
      {/* FIXME: Fix how this behaves */}
      <Box w="32%" shadow="xl" rounded="sm" overflow="hidden">
        <AspectRatio ratio={1 / 1.6}>
          <Image
            src={book.cover ? book.cover : ""}
            alt={`${book.title} book cover`}
          />
        </AspectRatio>
      </Box>

      {/* Book info */}
      <Flex w="68%" direction="column" gap="6">
        {/* Title, Author, Rating */}
        <Flex direction="column" gap="2">
          <Heading size="4xl">{book.title}</Heading>
          <Link asChild>
            <Text
              as="span"
              fontWeight="light"
              color="gray.500"
              onClick={handleAuthorClick}
            >
              {book.author_name}
            </Text>
          </Link>
          <Flex gap="2">
            <RatingGroup.Root
              readOnly
              allowHalf
              count={5}
              defaultValue={4.5}
              size="sm"
              colorPalette="orange"
            >
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>
            <Text color="gray.400" fontSize="sm">
              6,390 reviews
            </Text>
          </Flex>
        </Flex>

        {/* Genres */}
        <HStack flexWrap="wrap">
          {book.genres.map((g) => (
            <Badge key={g.id} colorPalette="blue" color="gray.600">
              {g.name}
            </Badge>
          ))}
        </HStack>

        {/* Synopsis */}
        <ExpandableText>
          <ExpandableText.Content maxLines={4}>
            <Text whiteSpace="pre-wrap">{book.synopsis}</Text>
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

        {/* Book metadata */}
        <GridData data={book.metadata} columns={2} itemsPerColumn={3} />

        <Separator />

        <Flex
          align={{ base: "start", md: "end" }}
          justify="space-between"
          gap="4"
          direction={{ base: "column", md: "row" }}
        >
          {/* Book quantity */}
          <Field.Root>
            <Field.Label color="gray.500" fontWeight="light">
              Quantity
            </Field.Label>
            <NumberInput.Root
              unstyled
              spinOnPress={false}
              value={quantity.toString()}
              onValueChange={(details) =>
                details.valueAsNumber > 0 && setQuantity(details.valueAsNumber)
              }
            >
              <HStack gap="2">
                <NumberInput.DecrementTrigger asChild>
                  <IconButton variant="outline" size="sm">
                    <LuMinus />
                  </IconButton>
                </NumberInput.DecrementTrigger>
                <NumberInput.ValueText
                  textAlign="center"
                  fontSize="lg"
                  minW="3ch"
                />
                <NumberInput.IncrementTrigger asChild>
                  <IconButton variant="outline" size="sm">
                    <LuPlus />
                  </IconButton>
                </NumberInput.IncrementTrigger>
              </HStack>
            </NumberInput.Root>
          </Field.Root>
          {/* Price and add to cart button */}
          <HStack gap="8">
            <Text fontSize="3xl" letterSpacing="wide">
              ${(book.price * quantity).toFixed(2)}
            </Text>
            <Button
              size="xl"
              variant="solid"
              colorPalette="blue"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              <Icon>
                <LuShoppingCart />
              </Icon>
              Add To Cart
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};
