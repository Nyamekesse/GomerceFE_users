import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Banner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "300px",
  alignItems: "center",
  padding: "0 5%",
  justifyContent: "space-between",
}));

export const BannerImage = styled(Box)(({ image, theme }) => ({
  width: "354px",
  height: "282px",
  objectFit: "scale-down",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${image})`,
  backgroundColor: "#fff",
}));

export const InfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "487px",
  height: "244px",
  //   paddingRight: "1%",
}));

export const Arrow = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "45.23px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  zIndex: "5",
  top: "45%",

  cursor: "pointer",
  [theme.breakpoints.up("tablet_650")]: {
    display: "flex",
  },
}));
