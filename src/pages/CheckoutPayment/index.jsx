import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/NeedHelp";
import Payment from "./Payment";
import Wrapper from "../../components/Wrapper/Wrapper";
const CheckoutPayment = () => {
  return (
    <Wrapper>
      <Grid container direction="row" spacing={4} mt={2} mb={3}>
        <Grid item tablet_650={8}>
          <Box>
            <Payment />
          </Box>
        </Grid>
        <Grid item tablet_650={4}>
          <OrderSummary />
          <NeedHelp />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CheckoutPayment;
