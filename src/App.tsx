import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "theme";
import { Navigation } from "components/ui/Navigation";
import type { LogoData, ButtonCollection } from "components/ui/Navigation";

import { Container } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  Placeholder,
  Search,
  ProductDetails,
  AuthorDetails,
} from "pages";
import { BookProvider } from "contexts/books";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/placeholder" element={<Placeholder />}></Route>
        <Route path="/book" element={<ProductDetails />}></Route>
        <Route path="/author" element={<AuthorDetails />}></Route>
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </ThemeProvider>
  );
}

export default App;

const Root = (): React.JSX.Element => {
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
