import { Outlet } from "react-router";
import { Container } from "@mui/material";
import { Navigation } from "@/components/ui/Navigation";
import type { LogoData, ButtonCollection } from "@/components/ui/Navigation";

export const Layout = (): React.JSX.Element => {
  const logo: LogoData = { text: "book vault" };
  const buttons: ButtonCollection = [
    { text: "home", endpoint: "/" },
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
