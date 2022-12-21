import React from "react";
import { Banner, BannerImage, InfoSection } from "./styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const DisplayCard = ({ title, label, description, image }) => {
  return (
    <Banner>
      <BannerImage image={image} />
      <InfoSection>
        <Typography variant="h1" fontSize={"32px"} fontWeight={"700"}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize={"28px"}
          fontWeight={"400"}
          mt={"4%"}
          mb={"3%"}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          fontSize={"14px"}
          fontWeight={"400"}
          mb={"5%"}
        >
          {description}
        </Typography>
        <Button variant="contained" size="large">
          shop now
        </Button>
      </InfoSection>
    </Banner>
  );
};

export default DisplayCard;
