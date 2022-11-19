import { Typography } from "@mui/material";
import React from "react";
import { checkoutHeading, Wrapper } from "../../components/CheckOut/Checkout";
import CustomCheckoutBreadcrumb from "../../components/CustomCheckoutBreadcrumb";

const Payment = () => {
  return (
    <>
      <Typography variant="h3" sx={checkoutHeading}>
        Checkout
      </Typography>
      <CustomCheckoutBreadcrumb address={true} delivery={true} />
      <Wrapper sx={{ height: "680px", backgroundColor: "#f9f9f9" }}></Wrapper>
    </>
  );
};

export default Payment;
