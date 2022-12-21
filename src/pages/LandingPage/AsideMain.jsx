import React from "react";
import ItemsCarousel from "../../components/ItemsCarousel";
import Collections from "./Collections";
import BigSlider from "../../components/BigSlider/BigSlider";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BestSellers } from "./styles";
const AsideMain = () => {
  const theme = useTheme();
  const matchesLaptop = useMediaQuery(theme.breakpoints.down("laptop_1024"));
  return (
    <>
      {/* <BigSlider /> */}
      <BestSellers>
        <Typography
          variant="h6"
          fontSize={"18.75px"}
          fontWeight={"600"}
          color={"#8E8E8E"}
        >
          Best sellers
        </Typography>
        <ItemsCarousel />
      </BestSellers>
      <Collections />
    </>
  );
};

export default AsideMain;
