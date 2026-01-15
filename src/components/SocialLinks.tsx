import type { AuthorLink } from "@/contexts/books";

import { Flex } from "@chakra-ui/react/flex";
import { IconButton } from "@chakra-ui/react/button";
import { Link as ChakraLink } from "@chakra-ui/react/link";

import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

type SocialLinksProps = {
  data: AuthorLink[];
};

export const SocialLinks = ({ data }: SocialLinksProps) => {
  const isSocialLink = (
    linkObj: AuthorLink
  ): linkObj is AuthorLink & { type: SocialPlatform } =>
    linkObj.type !== "website";
  const filteredLinks = data.filter(isSocialLink);

  return (
    <Flex gap="4">
      {filteredLinks.map((linkObj) => {
        const socialName = socialNameMap[linkObj.type] || linkObj.type;
        const SocialIcon = socialIconMap[linkObj.type];
        return (
          <IconButton
            key={linkObj.type}
            asChild
            aria-label={`Open author ${socialName} account`}
            variant="outline"
            rounded="full"
            borderColor="black"
            outlineColor="black"
          >
            <ChakraLink href={linkObj.url}>
              <SocialIcon />
            </ChakraLink>
          </IconButton>
        );
      })}
    </Flex>
  );
};

type SocialPlatform = Exclude<AuthorLink["type"], "website">;

const socialIconMap: Record<SocialPlatform, IconType> = {
  facebook: FaFacebook,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};

const socialNameMap: Partial<Record<SocialPlatform, string>> = {
  twitter: "X",
};
