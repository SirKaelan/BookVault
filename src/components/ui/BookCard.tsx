import React from "react";
import { useNavigate } from "react-router";

import type { Book } from "@/contexts/books";
import type { AnchorClickEvent } from "@/types/eventTypes";

import { Card } from "@chakra-ui/react/card";
import { Image } from "@chakra-ui/react/image";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";
import { Link as ChakraLink } from "@chakra-ui/react/link";
import { Text } from "@chakra-ui/react/text";
import { Button } from "@chakra-ui/react/button";

type BookCardProps = {
  data: Book;
};

export const BookCard = ({ data }: BookCardProps): React.JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate({ pathname: "/book", search: `?id=${data.id}` });
  };

  const handleAuthorClick = (e: AnchorClickEvent) => {
    navigate({ pathname: "/author", search: `?id=${data.author_id}` });
    e.stopPropagation(); // Prevents the click event from bubbling up
  };

  return (
    <Card.Root
      variant="elevated"
      gap="2"
      size="sm"
      overflow="hidden"
      transition="transform 0.125s ease-in-out"
      _hover={{ transform: "translateY(-0.5rem)", cursor: "pointer" }}
      onClick={handleCardClick}
    >
      {/* Book cover */}
      <AspectRatio minW="250px" ratio={1 / 1.6}>
        <Image
          src={data.cover ? data.cover : ""}
          title={`'${data.title}' cover`}
          alt={`'${data.title}' cover`}
        />
      </AspectRatio>
      {/* Book information */}
      <Card.Body gap="1">
        <Text fontSize="xl" fontWeight="medium">
          {data.title}
        </Text>

        <ChakraLink onClick={handleAuthorClick}>
          <Card.Description>{data.author_name}</Card.Description>
        </ChakraLink>

        <Text fontSize="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${data.price.toFixed(2)}
        </Text>
      </Card.Body>
      {/* Card button */}
      <Card.Footer>
        <Button w="full" colorPalette="blue" variant="solid" size="sm">
          Add to Cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
