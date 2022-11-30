import { Box, Button, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import CustomCheckoutBreadcrumb from "../../components/CheckoutTimeLine";
import summary from "../../SetUpData/summaryData";
import CustomDivider from "../../components/CustomDivider";
import {
  CustomTextField,
  Row,
  checkoutHeading,
  Summary,
  textStyle,
  Wrapper,
} from "../CheckoutDelivery/CheckoutDeliveryStyle";
const Payment = () => {
  const [payment, setPayment] = useState("");

  const handleChange = (event) => {
    setPayment(event.target.value);
  };
  return (
    <>
      <Typography variant="h3" sx={checkoutHeading}>
        Checkout
      </Typography>
      <CustomCheckoutBreadcrumb address={true} delivery={true} />
      <Wrapper>
        <Typography variant="subtitle2">
          How do you want to pay your order?
        </Typography>

        <Typography variant="subtitle2">Select payment option</Typography>
        <Box mt={1} mb={1} sx={{ width: "260px", height: "34px" }}>
          <CustomTextField
            select
            onChange={handleChange}
            value={payment}
            fullWidth
            size="medium"
            variant="standard"
            placeholder="open this to select"
          >
            <MenuItem value={"master card"}>Master Card</MenuItem>
            <MenuItem value={"visa card"}>Visa Card</MenuItem>
            <MenuItem value={"paypal"}>Paypal</MenuItem>dth
          </CustomTextField>
        </Box>
        <CustomDivider />
        <Typography variant="subtitle2" mt={2} mb={2}>
          Do you have a voucher?
        </Typography>
        <Box
          sx={{
            width: "410px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "272px" }}>
            <CustomTextField
              size="small"
              variant="standard"
              margin="none"
              fullWidth
              sx={{ height: "38px" }}
            />
          </Box>
          <Button size="medium" variant="outlined">
            add voucher
          </Button>
        </Box>
        <CustomDivider />
        <Summary>
          {summary.map((row, index) => {
            const { label, value } = row;

            return index === 4 ? (
              <>
                <CustomDivider />
                <Row key={index}>
                  <Box>
                    <Typography sx={textStyle}>{label}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={textStyle}>{`$ ${value}`}</Typography>
                  </Box>
                </Row>
              </>
            ) : (
              <Row key={index}>
                <Box>
                  <Typography sx={textStyle}>{label}</Typography>
                </Box>
                <Box>
                  <Typography sx={textStyle}>{`$ ${value}`}</Typography>
                </Box>
              </Row>
            );
          })}
        </Summary>
        <Button variant="contained">submit order</Button>
      </Wrapper>
    </>
  );
};

export default Payment;
