import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CustomCheckoutBreadcrumb from "../CustomCheckoutBreadcrumb/index";
import {
  Wrapper,
  sortContainerStyle,
  selectLabelStyle,
  ShippingSection,
  shippingItemsTitle,
  CustomDivider,
  ListItem,
  btnStyle,
  checkoutHeading,
} from "./Checkout";
const Checkout = () => {
  const [pickUpStation, setPickUpStation] = useState();

  const handleChange = (event) => {
    setPickUpStation(event.target.value);
  };

  return (
    <>
      <Typography variant="h3" sx={checkoutHeading}>
        Checkout
      </Typography>
      <CustomCheckoutBreadcrumb address={true} />
      <Wrapper>
        <Typography variant="subtitle2">
          How do you want your order delivered?
        </Typography>
        <Box mt={2} mb={2}>
          <FormControl>
            <RadioGroup row>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Pickup Station"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Typography variant="subtitle2">
          Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep with
          cheaper shipping fees?
        </Typography>
        <Box mt={1} mb={1}>
          <FormControl fullWidth size="small">
            <InputLabel sx={selectLabelStyle} id="select-pickup-station">
              Select pickup station
            </InputLabel>
            <Select
              sx={sortContainerStyle}
              labelId="select-pickup-station"
              value={pickUpStation}
              label="Select pickup station"
              onChange={handleChange}
            >
              <MenuItem value={"london"}>London</MenuItem>
              <MenuItem value={"abuja"}>Abuja</MenuItem>
              <MenuItem value={"ghana"}>Ghana</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <CustomDivider />
        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              value="female"
              disabled
              control={<Radio />}
              label="Deliver to your home or office"
            />
          </RadioGroup>
        </FormControl>
        <Typography variant="subtitle2" mt={2} mb={2}>
          Deliver between Tuesday 20 Sep and Thursday 22 Sep
        </Typography>
        <ShippingSection>
          <Typography sx={shippingItemsTitle} variant="h6">
            Shipping items
          </Typography>
          <CustomDivider />
          <ListItem>
            <Typography variant="p">Shipment 1 of 3</Typography>
            <Typography variant="p">
              Laptop Bag USB Back Pack Antitheft Bag
            </Typography>
            <Typography variant="p">Qty - 1</Typography>
            <Typography variant="p">Delivered by ---</Typography>
            <CustomDivider />
          </ListItem>
          <ListItem>
            <Typography variant="p">Shipment 1 of 3</Typography>
            <Typography variant="p">
              Laptop Bag USB Back Pack Antitheft Bag
            </Typography>
            <Typography variant="p">Qty - 1</Typography>
            <Typography variant="p">Delivered by ---</Typography>
            <CustomDivider />
          </ListItem>
        </ShippingSection>
        <Button sx={btnStyle} variant="contained" disableElevation>
          save and continue
        </Button>
      </Wrapper>
    </>
  );
};

export default Checkout;
