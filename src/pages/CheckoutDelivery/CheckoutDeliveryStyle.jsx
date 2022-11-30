import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "16px",
  gap: "4px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "4px",
  margin: "2% 0",
}));

const formControlStyle = {
  width: "240px",
  padding: "10px 8px",
  borderRadius: "4px",
  backgroundColor: "#F4F5EF",
  "& .MuiInput-root": {
    "&:before, :after, :hover:not(.Mui-disabled):before": {
      borderBottom: 0,
      backgroundColor: "transparent !important",
    },
    "&:focus": {
      backgroundColor: "transparent !important",
    },
  },
};
const CustomTextField = styled(TextField)(({ theme }) => ({
  border: "none",
  outline: "none",
  borderRadius: "4px",
  backgroundColor: "#f4f5ef",
  padding: "9px 8px",
  "& .MuiInput-root": {
    "&:before, :after, :hover:not(.Mui-disabled):before": {
      borderBottom: 0,
      backgroundColor: "transparent !important",
    },
    "&:focus-visible": {
      backgroundColor: "blue",
    },
  },
}));
const selectLabelStyle = {
  width: "187px",
  height: "16px",
  fontWeight: "500",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  color: "#1F2839",
  flex: "none",
  order: "0",
  flexGrow: "0",
};

const ShippingSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "8px",
  gap: "4px",
  border: "1px solid #CED4DA",
  borderRadius: "4px",
  flex: "none",
  alignSelf: "stretch",
  flexGrow: "0",
  marginBottom: "2%",
}));

const shippingItemsTitle = {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  flex: "none",
};

const ListItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "3%",
  borderRadius: "4px",
  width: "100%",
}));

const btnStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  background: "#1F2839",
  border: "1px solid #1F2839",
  margin: "2% 0",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#1f2839",
  },
};

const checkoutHeading = {
  display: "flex",
  justifyContent: "left",
  height: "32px",
  fontWeight: "400",
  fontSize: "24px",
  alignSelf: "flex-start",
  lineHeight: "32px",
  color: "#000000",
  flex: "none",
};

const Summary = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  width: "100%",
});
const Row = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "2%",
});
const textStyle = {
  height: "16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  alignItems: "center",
  color: "#000000",
  textTransform: "capitalize",
};

export {
  Wrapper,
  selectLabelStyle,
  ShippingSection,
  shippingItemsTitle,
  ListItem,
  btnStyle,
  checkoutHeading,
  formControlStyle,
  CustomTextField,
  Summary,
  Row,
  textStyle,
};
