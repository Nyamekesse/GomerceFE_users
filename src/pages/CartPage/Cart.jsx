import { Box, Grid } from "@mui/material";
import React from "react";
import CartMain from "./CartMain";
import { CustomSection } from "./CartPageStyling";
import Summary from "./Summary";

const Cart = () => {
  return (
    <>
      <CustomSection>
        <Grid
          container
          direction="row"
          mt={2}
          mb={3}
          justifyContent="space-between"
        >
          <Grid item xs={7}>
            <CartMain />
          </Grid>
          <Grid item xs={4}>
            <Summary />
          </Grid>
        </Grid>
      </CustomSection>
      <Box></Box>
    </>
  );
};

export default Cart;
