import React from "react";
import { Box, TextField } from "@mui/material";

export const SearchBar = (): JSX.Element => {
  return (
    <Box sx={{ mb: 4, px: 4 }}>
      <TextField label="Search" variant="outlined" sx={{ width: "100%" }} />
    </Box>
  );
};
