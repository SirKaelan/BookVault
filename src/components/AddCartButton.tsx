import { styled, Theme, Typography, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export const AddCartButton = () => {
  return (
    <AddCartBtn>
      <Icon />
      <TextContent>Add to cart</TextContent>
    </AddCartBtn>
  );
};

// --------------- Styling ---------------
const AddCartBtn = styled(Button)(({ theme }: AddCartButtonProps) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  textTransform: "uppercase",
  backgroundColor: `${theme.palette.secondary.main}`,
  border: "none",
  color: "#fff",
  padding: "1rem 5rem",
  "&:hover": {
    backgroundColor: "hsl(37, 100%, 47%)",
  },
}));

const TextContent = styled((props) => (
  <Typography {...props} component="span" fontWeight="medium" />
))({
  fontSize: "1.6rem",
  letterSpacing: "0.4rem",
});

const Icon = styled((props) => <ShoppingCart {...props} />)({
  fontSize: "2rem",
});

// --------------- Types ---------------
type AddCartButtonProps = {
  theme: Theme;
};
