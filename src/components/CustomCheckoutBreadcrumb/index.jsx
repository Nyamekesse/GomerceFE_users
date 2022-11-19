import React from "react";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import CustomBreadcrumbDivider from "./CustomBreadcrumbDivider";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { checkoutButtonStyle } from "./CustomBreadcrumbs";

const CustomCheckoutBreadcrumb = () => {
  const breadcrumbs = [
    <Button
      key="1"
      size="small"
      startIcon={<CheckCircleIcon />}
      sx={checkoutButtonStyle}
    >
      address details
    </Button>,
    <Button key="1" size="small" startIcon={"2."} sx={checkoutButtonStyle}>
      payment method
    </Button>,
    <Button key="1" size="small" startIcon={"3."} sx={checkoutButtonStyle}>
      delivery method
    </Button>,
  ];
  return (
    <Stack direction="row" mt={2.5} mb={2}>
      <Breadcrumbs
        separator={<CustomBreadcrumbDivider />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomCheckoutBreadcrumb;
