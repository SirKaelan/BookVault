import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

export const SearchBar = (): JSX.Element => {
  const [term, setTerm] = useState("");

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTerm(e.target.value);
  };

  return (
    <Box sx={{ mb: 4, px: 4 }}>
      <TextField
        onChange={handleOnChange}
        value={term}
        label="Search"
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </Box>
  );
};
