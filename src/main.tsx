import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { BookProvider } from "@/contexts/books";

// Mui imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";

// Chakra imports
import { Provider } from "@/components/ui/provider";

import "./index.css";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BookProvider>
            <App />
          </BookProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
