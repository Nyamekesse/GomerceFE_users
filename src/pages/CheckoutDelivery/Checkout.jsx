import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import CustomCheckoutBreadcrumb from "../../components/CheckoutTimeLine/index";
import CustomDivider from "../../components/CustomDivider";
import { Wrapper, checkoutHeading } from "./CheckoutDeliveryStyle";
import { Button, FormLabel, TextField } from "@mui/material";
import ShipmentSection from "./ShipmentSection";
const Checkout = () => {
  const [pickupStation, setPickUpStation] = useState("");

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
        <FormControl>
          <FormLabel>
            <Typography variant="subtitle2">
              How do you want your order delivered?
            </Typography>
          </FormLabel>
          <RadioGroup defaultValue={"pickup station"}>
            <FormControlLabel
              value="pickup station"
              control={<Radio />}
              label="Pickup Station"
            />
            <Typography variant="subtitle2" mt={1} mb={1}>
              Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep with
              cheaper shipping fees?
            </Typography>
            <Box mt={1} mb={1} sx={{ width: "260px" }}>
              <TextField
                select
                onChange={handleChange}
                value={pickupStation}
                fullWidth
                margin="dense"
                size="small"
                variant="outlined"
              >
                <MenuItem value={"london"}>London</MenuItem>
                <MenuItem value={"abuja"}>Abuja</MenuItem>
                <MenuItem value={"ghana"}>Ghana</MenuItem>
              </TextField>
            </Box>
            <CustomDivider />
            <FormControlLabel
              value="home or office"
              control={<Radio />}
              label="Deliver to your home or office"
            />
          </RadioGroup>
        </FormControl>
        <ShipmentSection />
        <Button variant="contained" disableElevation>
          save and continue
        </Button>
      </Wrapper>
    </>
  );
};

export default Checkout;
