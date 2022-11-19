import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { Typography } from "@mui/material";
import { orderPaneStyle } from "./StylesCheckoutAddress";

export const CheckoutOrders = (props) => {
  return (
    <Box sx={{ ...orderPaneStyle, mt: 2 }}>
      <Grid container>
        <Grid item sm={3}>
          <img src={props.image} alt={"phone"} width="85px" height="85px"></img>
        </Grid>
        <Grid item sm={9} pl={2}>
          <Typography variant="p" component="p" sx={{ mb: 1 }}>
            SMART 6, 6.6", (2GB RAM + 32GB ROM), 5000MAH, 3G - BLACK
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography variant="p" component="p">
              $$$$
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="p" component="p">
              Qty: 1
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
