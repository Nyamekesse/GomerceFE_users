import React from "react";
import { Grid, Box } from "@mui/material";
import Checkout from "../../components/CheckOut";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/OrderSummary/NeedHelp";
const CheckoutPayment = () => {
  return (
    <>
      <Grid container direction="row" spacing={4} mt={2} mb={3}>
        <Grid item xs={8}>
          <Box>
            <Checkout />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <OrderSummary />
          <NeedHelp />
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutPayment;
