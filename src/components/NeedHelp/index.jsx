import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Wrapper } from "./NeedHelpStyle";
import { checkoutHeading } from "../../pages/CheckoutDelivery/CheckoutDeliveryStyle";
const NeedHelp = () => {
  return (
    <Box mt={3}>
      <Typography variant="h3" sx={checkoutHeading}>
        Need help?
      </Typography>
      <Wrapper>
        <Typography variant="body1">
          Contact an expert to support you
        </Typography>
        <Button variant="outlined" disableElevation fullWidth size="large">
          reach out
        </Button>
      </Wrapper>
    </Box>
  );
};

export default NeedHelp;
