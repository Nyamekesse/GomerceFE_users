import React from "react";
import { Grid, Box } from "@mui/material";
import Checkout from "../../components/CheckOut";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/OrderSummary/NeedHelp";
import Wrapper from "../../components/Wrapper/Wrapper";
const CheckoutPayment = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default CheckoutPayment;
