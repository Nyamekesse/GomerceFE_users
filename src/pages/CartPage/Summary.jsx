import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CustomDivider, Row } from "../../components/CheckOut/Checkout";
import { CustomSummary } from "./CartPageStyling";

const Summary = () => {
  return (
    <CustomSummary>
      <Typography variant="h6">Cart Summary</Typography>
      <CustomDivider />
      <Row mt={2} mb={1}>
        <Box>
          <Typography variant="body2">Subtotal (2 items)</Typography>
        </Box>
        <Box>
          <Typography variant="body2">$ 59.9</Typography>
        </Box>
      </Row>
      <Button variant="contained" fullWidth={"true"}>
        proceed to checkOut
      </Button>
    </CustomSummary>
  );
};

export default Summary;
