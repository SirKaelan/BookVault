import React from "react";
import { styled, Typography, IconButton, Theme } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export const QuantityInput = ({ label }: QuantityInputProps) => {
  const [quantity, setQuantity] = React.useState<number>(
    LOWEST_ALLOWED_QUANTITY
  );

  const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const castedInput: number = Number(e.currentTarget.value);
    // Probably adding an upper limit to the quantity is bad,
    // but i am trying to avoid javascript scientific notation for big numbers
    if (
      !Number.isInteger(castedInput) ||
      castedInput < 0 ||
      castedInput >= 100000
    ) {
      return;
    }
    setQuantity(castedInput);
  };

  const handleQuantityIncrease = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  const handleQuantityDecrease = () =>
    setQuantity((prevQuantity) =>
      Math.max(LOWEST_ALLOWED_QUANTITY, prevQuantity - 1)
    );

  return (
    <Container>
      <Label>{label}</Label>
      <NumberInput onChange={handleQuantityInput} value={quantity} />
      <ButtonsContainer>
        <ButtonContainer onClick={handleQuantityIncrease}>
          <Add />
        </ButtonContainer>
        <ButtonContainer onClick={handleQuantityDecrease}>
          <Remove />
        </ButtonContainer>
      </ButtonsContainer>
    </Container>
  );
};

// --------------- Constants ---------------
const ELEMENT_GAP = "0.1rem";
const LOWEST_ALLOWED_QUANTITY = 0;

// --------------- Styling ---------------
// For some reason passing props like this applied the CSS rules from "styled"
const MyInputField = (props: MyInputFieldProps) => (
  <input {...props} type="text" />
);

const Container = styled("span")({
  display: "flex",
  backgroundColor: "lightgrey",
  width: "max-content",
  padding: ELEMENT_GAP,
  gap: ELEMENT_GAP,
});

// Not sure what type to give props here
const Label = styled((props) => (
  <Typography {...props} variant="h5" component="span" />
))({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  padding: "1rem 2rem",
  fontWeight: "lighter",
});

const NumberInput = styled(MyInputField)({
  textAlign: "center",
  maxWidth: "5.5rem",
  border: "none",
  outline: "none", // Probably not good to leave this here
  fontSize: "1.6rem",
  padding: "0 0.5rem",
  fontWeight: "lighter",
});

const ButtonsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: ELEMENT_GAP,
});

const ButtonContainer = styled((props) => <IconButton {...props} />)(
  ({ theme }: ButtonContainerProps) => ({
    backgroundColor: "#fff",
    borderRadius: "0",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.main}`,
    },
    ".MuiTouchRipple-child": {
      backgroundColor: `${theme.palette.error.main}`,
    },
  })
);

// --------------- Types ---------------
type QuantityInputProps = {
  label: string;
};

type MyInputFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

type ButtonContainerProps = {
  theme: Theme;
};
