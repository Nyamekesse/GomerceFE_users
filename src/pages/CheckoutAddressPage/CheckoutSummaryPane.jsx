import Box from "@mui/material/Box";
import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import phone from "../../Assets/Images/phone1.jfif";
import { CheckoutSubtotal } from "./CheckoutSubtotal";
import { CheckoutOrders } from "./CheckoutOrders";
import { NeedHelp } from "./NeedHelp";
import {
  modifyCartStyle,
  outlineStyle,
  textStyle,
} from "./StylesCheckoutAddress";

export const CheckoutSummaryPane = () => {
  return (
    <Box sx={{ ...textStyle, mt: 5, pt: 5 }}>
      <Box sx={{ ...outlineStyle, p: 3 }}>
        <Box>
          <Typography sx={textStyle}>Your Order ( 2 Items)</Typography>
        </Box>
        <Box>
          <CheckoutOrders image={phone} />
          <CheckoutOrders image={phone} />
        </Box>
        <Box>
          <CheckoutSubtotal text1="Subtotal" price="$$$$$$" />
          <CheckoutSubtotal text1="VAT" price="$$$$$$" />
          <CheckoutSubtotal text1="Total" price="$$$$$$" />
        </Box>

        <Button
          variant="contained"
          color="grey"
          sx={{
            ...modifyCartStyle,
            mt: 1,
            width: "100%",
          }}
        >
          MODIFY CART
        </Button>
      </Box>

      <NeedHelp />
    </Box>
  );
};
