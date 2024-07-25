import React from "react";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = ({ logo, buttons }: NavigationProps): JSX.Element => {
  // Fixing both logo and button information if it has wrong capitalization
  let editedLogo: LogoData = { ...logo };
  if (!logo.imagePath) {
    editedLogo = {
      text: logo.text
        .split(" ")
        .map((word) => {
          const loweredWord = word.toLowerCase();
          return loweredWord.charAt(0).toUpperCase() + loweredWord.slice(1);
        })
        .join(" "),
    };
  }

  const editedBtnData = buttons.map((btn): ButtonData => {
    const loweredText = btn.text.toLowerCase();
    return {
      text: loweredText.charAt(0).toUpperCase() + loweredText.slice(1),
      endpoint: btn.endpoint.toLowerCase(),
    };
  });

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {
            // currently logo image is being ignored
            editedLogo.text
          }
        </Typography>
        <Stack direction="row" spacing={2}>
          {editedBtnData.map((btn) => (
            <Button color="inherit">
              <Link to={`${btn.endpoint}`}>{`${btn.text}`}</Link>
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
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

type NavigationProps = {
  logo: LogoData;
  buttons: ButtonCollection;
};
