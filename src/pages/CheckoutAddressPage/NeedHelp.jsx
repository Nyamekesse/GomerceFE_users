import Box from "@mui/material/Box";
import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import {
  modifyCartStyle,
  outlineStyle,
  widthfull,
} from "./StylesCheckoutAddress";

export const NeedHelp = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h6" component="p" sx={{ my: 2, mb: 3 }}>
        Need Help?
      </Typography>
      <Box sx={{ ...outlineStyle, px: 3, pb: 2 }}>
        <Typography variant="p" component="p">
          Contact an expert to help you
        </Typography>
        <Button
          variant="contained"
          color="grey"
          width="100%"
          sx={{ ...modifyCartStyle, widthfull, mt: 1, width: "100%" }}
        >
          REACH OUT
        </Button>
      </Box>
    </Box>
  );
};
