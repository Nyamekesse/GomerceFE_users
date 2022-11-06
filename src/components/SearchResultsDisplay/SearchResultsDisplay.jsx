import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ResultContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px",
}));

export default ResultContainer;
