import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router";

import { Box } from "@chakra-ui/react/box";
import { Button, IconButton, CloseButton } from "@chakra-ui/react/button";
import { Heading } from "@chakra-ui/react/heading";
import { HStack, VStack } from "@chakra-ui/react/stack";
import { Icon } from "@chakra-ui/react/icon";
import { Flex } from "@chakra-ui/react/flex";
import { Drawer } from "@chakra-ui/react/drawer";
import { Portal } from "@chakra-ui/react/portal";
import { useBreakpointValue } from "@chakra-ui/react/hooks";

import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import type { LogoData, ButtonCollection } from "@/components/Layout";

type NavigationProps = {
  logo: LogoData;
  buttons: ButtonCollection;
};

export const Navigation = ({
  logo,
  buttons,
}: NavigationProps): React.JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useBreakpointValue(
    { base: true, md: false },
    { ssr: false }
  );

  // Closes drawer if it's open and you resize away from mobile nav
  useEffect(() => {
    if (!isMobile && isDrawerOpen) setIsDrawerOpen(false);
  }, [isDrawerOpen, isMobile]);

  return (
    <>
      {/* Desktop nav */}
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

      {/* Mobile nav */}
      <Box
        as="nav"
        hideFrom="md"
        py="3"
        px="8"
        css={{ position: "sticky", top: "0" }}
        bgColor="white/70"
        backdropFilter="blur(5px)"
        zIndex="sticky"
      >
        <Flex align="center" justify="space-between">
          <RouterNavLink to="/">
            <Heading size="2xl">{logo.text}</Heading>
          </RouterNavLink>

          {/* Mobile navigation menu */}
          <Drawer.Root
            open={isDrawerOpen}
            onOpenChange={(e) => setIsDrawerOpen(e.open)}
          >
            <Drawer.Trigger asChild>
              <IconButton
                aria-label="Open mobile menu"
                variant="ghost"
                size="2xl"
                cursor="pointer"
              >
                <RxHamburgerMenu />
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content py="20" px="8">
                  {/* Add buttons here */}
                  <VStack as="ul">
                    {buttons.map((btn) => (
                      <Box key={btn.text} as="li" w="full">
                        <Drawer.Context>
                          {(store) => (
                            <RouterNavLink
                              to={btn.endpoint}
                              onClick={() => store.setOpen(false)}
                            >
                              {({ isActive }) => (
                                <Button
                                  as="span"
                                  w="full"
                                  bgColor={isActive ? "bg.muted" : undefined}
                                  variant="ghost"
                                  size="2xl"
                                  fontWeight="light"
                                >
                                  {btn.text}
                                </Button>
                              )}
                            </RouterNavLink>
                          )}
                        </Drawer.Context>
                      </Box>
                    ))}
                  </VStack>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="xl" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Flex>
      </Box>
    </>
  );
};
