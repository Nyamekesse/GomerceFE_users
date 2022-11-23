import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { CustomDivider, ListItem } from "../../components/CheckOut/Checkout";
import { textStyle } from "../../components/OrderSummary/OrderSummary";
import { ActionRow } from "./CartPageStyling";
import Phone from "../../Assets/Images/phone1.jfif";
import SortItems from "../../components/SortContainer";
const CartItem = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={3}>
          <Box>
            <img src={Phone} alt="image phone" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <Typography variant="p" sx={textStyle} noWrap="true">
              xiamo redmi 10A, 6.53" 3GB+64GB, 13.0MP, 5000mAh
            </Typography>
            <Typography variant="p" sx={textStyle}>
              4g LTE, Dual sim - graphite grey
            </Typography>
            <ActionRow>
              <SortItems />
              <Button>delete</Button>
              <Button>save for later</Button>
            </ActionRow>
          </ListItem>
        </Grid>
        <Grid item xs={3}>
          <ListItem>
            <Typography variant="p" sx={textStyle} noWrap="true">
              $ 29.21
            </Typography>
          </ListItem>
        </Grid>
      </Grid>
      <CustomDivider />
    </>
  );
};

export default CartItem;
