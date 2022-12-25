import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Wrapper } from "./styles";
const NeedHelp = () => {
  return (
    <Box mt={3}>
      <Typography variant="h3" fontWeight={400} fontSize={"24px"}>
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
