import React from "react";
import { Box, Grid } from "@mui/material";
import Phone from "../../Assets/Images/phone1.jfif";
import { Typography } from "@mui/material";
import { textStyle } from "./OrderSummary";
import CustomDivider from "../CustomDivider";
import { ListItem } from "../../pages/CheckoutDelivery/CheckoutDeliveryStyle";
const OrderItemDetails = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={3}>
          <Box>
            <img src={Phone} alt={Phone} />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <ListItem>
            <Typography variant="p" sx={textStyle} noWrap="true">
              Smart 6, 6.6", (2 gb ram + 32 gb rom),500mah
            </Typography>
            <Typography variant="p" sx={textStyle}>
              3g - black
            </Typography>
            <Typography variant="p" sx={textStyle}>
              $$$$
            </Typography>
            <Typography variant="p" sx={textStyle}>
              Qty - 1
            </Typography>
          </ListItem>
        </Grid>
      </Grid>
      <CustomDivider />
    </>
  );
};

export default OrderItemDetails;
