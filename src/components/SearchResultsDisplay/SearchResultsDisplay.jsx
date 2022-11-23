import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ResultContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px",
}));

const Title = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "36px",
  flex: "none",
  order: "0",
  alignSelf: "stretch",
  flexGrow: "0",
}));

const Label = styled(Typography)(({ theme }) => ({
  width: "192px",
  height: "16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  flex: "none",
  order: "0",
  flexGrow: "0",
}));

export { ResultContainer, Title, Label };
