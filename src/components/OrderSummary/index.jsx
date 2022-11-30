import React from "react";
import { textStyle, Wrapper } from "./OrderSummary";
import { Button, Grid, Typography } from "@mui/material";
import OrderItemDetails from "./OrderItemDetails";
import CustomDivider from "../CustomDivider";
import { checkoutHeading } from "../../pages/CheckoutDelivery/CheckoutDeliveryStyle";

const OrderSummary = () => {
  return (
    <>
      <Typography variant="h3" sx={checkoutHeading}>
        Order summary
      </Typography>
      <Wrapper>
        <Typography variant="subtitle2">Your Order (2 items)</Typography>
        <OrderItemDetails />
        <OrderItemDetails />
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="subtitle2" sx={textStyle}>
              Subtotal
            </Typography>
            <Typography variant="subtitle2" sx={textStyle}>
              VAT
            </Typography>
            <Typography variant="subtitle2" sx={textStyle}>
              Total
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2" sx={textStyle}>
              $$$$$$
            </Typography>
            <Typography variant="subtitle2" sx={textStyle}>
              $$$$$$
            </Typography>
            <Typography variant="subtitle2" sx={textStyle}>
              $$$$$$
            </Typography>
          </Grid>
        </Grid>
        <CustomDivider />
        <Button variant="outlined" disableElevation fullWidth size="large">
          Modify cart
        </Button>
      </Wrapper>
    </>
  );
};

export default OrderSummary;
