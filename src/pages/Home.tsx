import React from "react";

import { Button } from "@chakra-ui/react/button";
import { HStack } from "@chakra-ui/react/stack";
import { useColorMode } from "@/components/ui/color-mode";

export const Home = (): React.JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <div>Home page!</div>
      <div>
        Color mode is: <b>{colorMode.toUpperCase()}</b>
      </div>
      <HStack>
        <Button variant="outline" onClick={toggleColorMode}>
          Button
        </Button>
        <Button variant="outline">Another button!</Button>
      </HStack>
    </>
  );
};
