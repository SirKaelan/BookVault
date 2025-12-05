import React from "react";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router";

const NavButton = styled(Button)({
  color: "inherit",
  fontSize: "1.7rem",
  textTransform: "none",
  fontWeight: 400,
});

const LogoContainer = styled(Typography)({
  display: "flex",
  alignItems: "stretch",
  margin: "0 2rem 0 2rem",
  textTransform: "uppercase",
});

export const Navigation = ({
  logo,
  buttons,
}: NavigationProps): React.JSX.Element => {
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
  const middle = Math.ceil(editedBtnData.length / 2);
  const firstHalf = editedBtnData.slice(0, middle);
  const secondHalf = editedBtnData.slice(middle);

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "center", alignItems: "stretch" }}>
        <Stack direction="row" spacing={0.5}>
          {firstHalf.map((btn) => (
            <NavButton key={btn.text}>
              <Link to={`${btn.endpoint}`}>{`${btn.text}`}</Link>
            </NavButton>
          ))}
        </Stack>
        <LogoContainer variant="h4" component="div">
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            {
              // currently logo image is being ignored
              editedLogo.text
            }
          </Link>
        </LogoContainer>
        <Stack direction="row" spacing={0.5}>
          {secondHalf.map((btn) => (
            <NavButton key={btn.text}>
              <Link to={`${btn.endpoint}`}>{`${btn.text}`}</Link>
            </NavButton>
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
