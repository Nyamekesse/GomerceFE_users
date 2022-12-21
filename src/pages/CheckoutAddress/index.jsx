import React from "react";
import Grid from "@mui/material/Grid";
import OrderSummary from "../../components/OrderSummary";
import NeedHelp from "../../components/NeedHelp";
import Wrapper from "../../components/Wrapper/Wrapper";
import AddressMain from "./AddressMain";
const CheckoutDelivery = () => {
  return (
    <Wrapper>
      <Grid container direction="row" spacing={4} mt={2} mb={3}>
        <Grid item tablet_650={8}>
          <AddressMain />
        </Grid>
        <Grid item tablet_650={4}>
          <OrderSummary />
          <NeedHelp />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CheckoutDelivery;
