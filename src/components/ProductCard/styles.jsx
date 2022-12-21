import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
export const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2%",
  width: "200px",
  filter: "drop-shadow(0px 2px 2px rgba(142, 142, 142, 0.1))",
  borderRadius: "4px",
  [theme.breakpoints.down("mobile_450")]: {
    margin: "0 auto",
  },
}));

export const Image = styled(Box)(({ image, theme }) => ({
  width: "200px",
  height: "200px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${image})`,
}));

export const Details = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2%",
}));
