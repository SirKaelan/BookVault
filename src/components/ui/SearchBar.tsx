import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export const SearchBar = (): JSX.Element => {
  const paramName = "search_query";
  const [term, setTerm] = useState<string>("");
  const [_, setSearchParams] = useSearchParams();

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!term) return;
    setSearchParams({ [paramName]: term });
    setTerm("");
  };

  return (
    <Box sx={{ mb: 4, px: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleOnChange}
          value={term}
          label="Search"
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </form>
    </Box>
  );
};
