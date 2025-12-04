// Just a test of the test

import { render, screen } from "@testing-library/react";
import { SearchBar } from "@/components/ui/SearchBar";
import { MemoryRouter } from "react-router-dom";

describe("SearchBar", () => {
  test("renders component", () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    screen.debug();
  });
});
