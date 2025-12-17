import { Outlet } from "react-router";
import { Container } from "@mui/material";
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
      <Container sx={{ height: "100%", py: 4 }}>
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
