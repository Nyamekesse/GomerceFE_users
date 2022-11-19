import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import {
  checkoutHeading,
  CustomDivider,
  selectLabelStyle,
  selectContainerStyle,
  Wrapper,
} from "../../components/CheckOut/Checkout";
import CustomCheckoutBreadcrumb from "../../components/CustomCheckoutBreadcrumb";

const Payment = () => {
  const [pickUpStation, setPickUpStation] = useState();

  const handleChange = (event) => {
    setPickUpStation(event.target.value);
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
        <Box mt={1} mb={1}>
          <FormControl fullWidth size="small">
            {/* <InputLabel
              sx={selectLabelStyle}
              id="select-pickup-station"
              disableAnimation="true"
              shrink="true"
            >
              open this select
            </InputLabel> */}
            <Select
              variant="standard"
              sx={selectContainerStyle}
              labelId="select-pickup-station"
              value={pickUpStation}
              input={<OutlinedInput />}
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem disabled value="">
                open this select
              </MenuItem>
              <MenuItem value={"visa card"}>Visa Card</MenuItem>
              <MenuItem value={"master card"}>Master Card</MenuItem>
              <MenuItem value={"paypal"}>Paypal</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <CustomDivider />
        <Typography variant="subtitle2" mt={2} mb={2}>
          Deliver between Tuesday 20 Sep and Thursday 22 Sep
        </Typography>
      </Wrapper>
    </>
  );
};

export default Payment;
