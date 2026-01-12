import React from "react";

import { Button } from "@chakra-ui/react/button";
import { Icon } from "@chakra-ui/react/icon";

import { LuChevronDown, LuChevronUp } from "react-icons/lu";

type ShowMoreButtonProps = {
  toggleState: boolean;
} & React.ComponentPropsWithRef<typeof Button>;

export const ShowMoreButton = ({
  toggleState,
  ...props
}: ShowMoreButtonProps) => {
  return (
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
      {...props}
    >
      Show {toggleState ? "less" : "more"}
      <Icon p="0">{toggleState ? <LuChevronUp /> : <LuChevronDown />}</Icon>
    </Button>
  );
};
