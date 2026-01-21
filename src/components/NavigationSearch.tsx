import React from "react";

import { Icon } from "@chakra-ui/react/icon";

import { FaMagnifyingGlass } from "react-icons/fa6";

type NavigationSearchProps = React.ComponentPropsWithRef<typeof Icon>;

export const NavigationSearch = ({ ...props }: NavigationSearchProps) => {
  const handleIconClick = () => {
    console.log("Magnifying glass clicked");
  };

  return (
    // TODO: Add code for search bar (it will probably end up being the same component as "SearchBar")
    <Icon onClick={handleIconClick} cursor="pointer" {...props}>
      <FaMagnifyingGlass />
    </Icon>
  );
};
