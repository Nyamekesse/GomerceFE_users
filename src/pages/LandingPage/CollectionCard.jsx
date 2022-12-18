import React from "react";
import { Card } from "./styles";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const CollectionCard = ({ title, image, link }) => {
  return (
    <Card>
      <Typography variant="h6">{title}</Typography>
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardActions disableSpacing>
        <Button variant="outlined">See More</Button>
      </CardActions>
    </Card>
  );
};

export default CollectionCard;
