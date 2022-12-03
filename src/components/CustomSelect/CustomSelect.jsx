import { styled, TextField } from "@mui/material";

const StyledSelect = styled(TextField)(({ showBackground, showBorder }) => ({
  background: showBackground ? "#F4F5EF" : "",
  border: showBorder ? "1px solid #CED4DA" : "none",
}));

const sortLabelStyle = {
  width: "63px",
  height: "16px",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  letterSpacing: "1.25px",
  textTransform: "uppercase",
  color: "#1F2839",
  flex: "none",
  order: "0",
  flexGrow: "0",
};

export { StyledSelect, sortLabelStyle };
