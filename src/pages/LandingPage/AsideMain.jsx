import React from "react";
import Slider from "../../components/Slider";
import Collections from "./Collections";
import BigSlider from "../../components/BigSlider/BigSlider";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const AsideMain = () => {
  const theme = useTheme();
  const matchesLaptop = useMediaQuery(theme.breakpoints.down("laptop_1024"));
  return (
    <>
      <BigSlider />
      <Slider />
      <Collections />
    </>
  );
};

export default AsideMain;
