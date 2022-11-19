import { Box, Divider } from "@mui/material";
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

const sortContainerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 8px",
  gap: "8px",
  width: "210px",
  height: "36px",
  background: "#F4F5EF",
  border: "none",
  outline: "none",
  borderRadius: "4px",
};

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

const CustomDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  border: "1px solid #CED4DA",
  flex: "none",
  order: "0",
  alignSelf: "stretch",
  margin: "2% 0",
}));

const ListItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "8px",
  gap: "2px",
  borderRadius: "4px",
  flex: "none",
  order: "2",
  alignSelf: "stretch",
  flexGrow: "0",
}));

const btnStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  background: "#1F2839",
  border: "1px solid #1F2839",
  margin: "2% 0",
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
export {
  Wrapper,
  sortContainerStyle,
  selectLabelStyle,
  ShippingSection,
  shippingItemsTitle,
  CustomDivider,
  ListItem,
  btnStyle,
  checkoutHeading,
};
