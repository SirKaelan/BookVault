import React from "react";
import "./App.css";

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Container,
} from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home, Placeholder, Search, ProductDetails } from "pages";
import { Book, BookProvider, useBookState } from "contexts/books";
import { BOOK_FETCHING_URL } from "randomConfig"; // For later use
import { useFetchBooks } from "hooks";

function App() {
  // Keeping for reference for now
  // const DemoButton = styled(Button)(() => ({
  //   backgroundColor: deepOrange[800],
  //   textTransform: "none",
  //   fontSize: "1rem",
  //   borderRadius: "8px",
  //   "&:hover": { background: deepOrange[600] },
  // }));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/placeholder" element={<Placeholder />}></Route>
        <Route path="/book" element={<ProductDetails />}></Route>
      </Route>
    )
  );

  return (
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  );
}

export default App;

const Root = (): JSX.Element => {
  const BookState = useBookState();
  // Somehow this hook needs to not call at every re-render
  const { booksData, isLoading, error, fetchBooks } =
    useFetchBooks<Book[]>(BOOK_FETCHING_URL);

  // Still don't know a better way of
  // feeding external data to the state
  React.useEffect(() => {
    // This solutions is flawed right now anyways
    BookState.overrideBooks(booksData);
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Book Vault
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="search">Search</Link>
            </Button>
            <Button color="inherit">
              <Link to="placeholder">Placeholder</Link>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container sx={{ height: "100%", py: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
