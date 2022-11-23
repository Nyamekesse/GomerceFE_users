import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

import { Typography } from "@mui/material";

export const CheckoutSubtotal = (props) => {
  return (
    <Box mb={1}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3, width: "100%" }}
      >
        <Grid item xs={3}>
          <Typography variant="p" component="p">
            {props.text1}
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Typography variant="p" component="p">
            {props.price}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
