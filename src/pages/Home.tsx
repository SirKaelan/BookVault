import React from "react";

import { HStack, Stack } from "@chakra-ui/react/stack";
import { AspectRatio } from "@chakra-ui/react/aspect-ratio";
import { Image } from "@chakra-ui/react/image";
import { Heading } from "@chakra-ui/react/heading";
import { Center } from "@chakra-ui/react/center";
import { Button } from "@chakra-ui/react/button";
import { Box } from "@chakra-ui/react/box";

export const Home = (): React.JSX.Element => {
  return (
    <>
      <Stack gap="20">
        <Heading size="6xl">
          <Center>Welcome to Book Vault</Center>
        </Heading>

        {/* Featured books */}
        <Stack gap="5">
          <Heading size="4xl">Featured books</Heading>
          <Box position="relative">
            <HStack gap="5" overflow="hidden">
              {[...Array(8)].map(() => (
                <AspectRatio minW="150px" ratio={1 / 1.6}>
                  <Image
                    src="https://m.media-amazon.com/images/I/81pJXhRLdoL._AC_UF1000,1000_QL80_.jpg"
                    alt="The Way of Kings book cover"
                  />
                </AspectRatio>
              ))}
            </HStack>
            <Button
              position="absolute"
              right="-10px"
              top="50%"
              transform="translateY(-50%)"
              size="xl"
              colorPalette="teal"
              variant="subtle"
              rounded="full"
            >
              {">"}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
