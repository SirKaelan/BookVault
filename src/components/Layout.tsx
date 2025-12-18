import { Outlet } from "react-router";
import { Container } from "@chakra-ui/react/container";
import { Navigation } from "@/components/ui/Navigation";

export const Layout = (): React.JSX.Element => {
  const logo: LogoData = { text: "Book Vault" };
  const buttons: ButtonCollection = [
    { text: "Home", endpoint: "/" },
    { text: "Search", endpoint: "search" },
    { text: "Placeholder", endpoint: "placeholder" },
  ];
  return (
    <>
      <Navigation logo={logo} buttons={buttons} />
      <Container py="4" maxW="6xl">
        <Outlet />
      </Container>
    </>
  );
};

export type LogoData = {
  imagePath?: string;
  text: string;
};

type ButtonData = {
  text: string;
  endpoint: string;
};

export type ButtonCollection = ButtonData[];
