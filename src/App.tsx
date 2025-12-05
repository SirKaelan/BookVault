import { Routes, Route } from "react-router";
import {
  Home,
  Placeholder,
  Search,
  ProductDetails,
  AuthorDetails,
} from "@/pages";
import { Layout } from "@/components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="placeholder" element={<Placeholder />}></Route>
        <Route path="book" element={<ProductDetails />}></Route>
        <Route path="author" element={<AuthorDetails />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
