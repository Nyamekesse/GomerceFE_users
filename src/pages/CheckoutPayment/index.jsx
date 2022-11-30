import { Box, Grid } from "@mui/material";
import React from "react";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/NeedHelp";
import Payment from "./Payment";
import Wrapper from "../../components/Wrapper/Wrapper";
const CheckoutPayment = () => {
  return (
    <Wrapper>
      <Grid container direction="row" spacing={4} mt={2} mb={3}>
        <Grid item xs={8}>
          <Box>
            <Payment />
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
