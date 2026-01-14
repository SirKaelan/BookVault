import React from "react";

import type { AuthorLink } from "@/contexts/books";

import { Button } from "@chakra-ui/react/button";
import { Icon } from "@chakra-ui/react/icon";
import { Link as ChakraLink } from "@chakra-ui/react/link";

import { LuExternalLink } from "react-icons/lu";

type AuthorWebsiteButtonProps = {
  data: AuthorLink[];
  children: string;
} & React.ComponentPropsWithRef<typeof Button>;

export const AuthorWebsiteButton = ({
  data,
  children,
  ...props
}: AuthorWebsiteButtonProps) => {
  const isWebsite = (
    linkObj: AuthorLink
  ): linkObj is AuthorLink & { type: "website" } => linkObj.type === "website";
  // I know, not safe at all
  const [website] = data.filter(isWebsite);

  return (
    <Button
      asChild
      colorPalette="blue"
      variant="solid"
      size="xl"
      letterSpacing="wider"
      {...props}
    >
      <ChakraLink target="_blank" href={website.url}>
        {children}
        <Icon>
          <LuExternalLink />
        </Icon>
      </ChakraLink>
    </Button>
  );
};
