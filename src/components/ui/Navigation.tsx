import React from "react";
import { NavLink as RouterNavLink } from "react-router";

import { Box } from "@chakra-ui/react/box";
import { Button } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/heading";
import { HStack } from "@chakra-ui/react/stack";
import { Icon } from "@chakra-ui/react/icon";
import { Flex } from "@chakra-ui/react/flex";
import { FaUser } from "react-icons/fa";

import type { LogoData, ButtonCollection } from "@/components/Layout";

type NavigationProps = {
  logo: LogoData;
  buttons: ButtonCollection;
};

export const Navigation = ({
  logo,
  buttons,
}: NavigationProps): React.JSX.Element => {
  return (
    <>
      <Box
        as="nav"
        hideBelow="md"
        py="5"
        px="8"
        css={{ position: "sticky", top: "0" }}
        bgColor="white/70"
        backdropFilter="blur(5px)"
        zIndex="sticky"
      >
        <Flex align="center" gap="14">
          {/* Logo container on the left side */}
          <RouterNavLink to="/">
            <Heading size="2xl">{logo.text}</Heading>
          </RouterNavLink>
          {/* Button container in the middle */}
          <HStack as="ul" flexGrow="1">
            {buttons.map((btn) => (
              <Box key={btn.text} as="li">
                <RouterNavLink to={btn.endpoint}>
                  {({ isActive }) => (
                    <Button
                      as="span"
                      bgColor={isActive ? "bg.muted" : undefined}
                      variant="ghost"
                      size="lg"
                      fontWeight="light"
                    >
                      {btn.text}
                    </Button>
                  )}
                </RouterNavLink>
              </Box>
            ))}
          </HStack>
          {/* Icon + Signin/Signout buttons on right side */}
          <Icon size="md" cursor="pointer">
            <FaUser />
          </Icon>
        </Flex>
      </Box>

      {/* FIXME: Turn this into a mobile navbar */}
      <Box hideFrom="md">Mobile nav</Box>
    </>
  );
};
