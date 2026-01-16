import { useNavigate } from "react-router";

import type { Book } from "@/contexts/books";

import { Flex } from "@chakra-ui/react/flex";
import { Box } from "@chakra-ui/react/box";
import { Image } from "@chakra-ui/react/image";
import { Text } from "@chakra-ui/react/text";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";
import { RatingGroup } from "@chakra-ui/react/rating-group";
import { IconButton } from "@chakra-ui/react/button";

import { LuShoppingCart } from "react-icons/lu";

type AuthorBookCardProps = {
  data: Book;
};

export const AuthorBookCard = ({ data }: AuthorBookCardProps) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate({ pathname: "/book", search: `?id=${data.id}` });
  };

  return (
    <Flex gap="3" w="15.75rem">
      {/* Book cover */}
      <Box
        flexShrink="0"
        rounded="sm"
        overflow="hidden"
        shadow="lg"
        cursor="pointer"
        onClick={handleBookClick}
      >
        <AspectRatio w="95px" ratio={1 / 1.6}>
          <Image
            src={data.cover ? data.cover : ""}
            title={`'${data.title}' cover`}
            alt={`'${data.title}' cover`}
          />
        </AspectRatio>
      </Box>

      {/* Book information */}
      <Flex direction="column" gap="2">
        {/* Book name + author */}
        <Box onClick={handleBookClick}>
          <Text fontWeight="bold" letterSpacing="wide" cursor="pointer">
            {data.title}
          </Text>
          <Text color="gray.500" fontSize="sm" cursor="pointer">
            {data.author_name}
          </Text>
        </Box>

        {/* Rating */}
        {/* FIXME: Add rating data to books */}
        <Flex gap="1" cursor="default">
          <RatingGroup.Root
            readOnly
            allowHalf
            count={5}
            defaultValue={4.5}
            size="xs"
            colorPalette="orange"
          >
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
          <Text color="gray.400" fontSize="sm">
            6,390
          </Text>
        </Flex>

        {/* Price and button */}
        <Flex mt="auto" gap="2" align="center">
          <Text letterSpacing="wider" cursor="default">
            ${data.price.toFixed(2)}
          </Text>

          {/* TODO: In the future, on click should put the book in cart */}
          <IconButton size="xs" colorPalette="blue" onClick={handleBookClick}>
            <LuShoppingCart />
          </IconButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
