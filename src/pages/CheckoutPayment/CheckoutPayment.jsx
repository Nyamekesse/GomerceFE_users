import React from "react";
import { Grid, Box } from "@mui/material";
const CheckoutPayment = () => {
  return (
    <>
      <Grid container direction="row" spacing={4}>
        <Grid item xs={8}>
          <Box sx={{ backgroundColor: "green" }}>Hello there</Box>
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "brown" }}>
          Welcome to home
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutPayment;
