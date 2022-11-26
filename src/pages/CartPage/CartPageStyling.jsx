import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSection = styled(Box)({
  padding: "10px",
});

const ActionRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1%",
  width: "100%",
});

const CustomCartMain = styled(Box)({
  padding: "3%",
  width: "100%",
  background: " #FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});

const CustomSummary = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "3%",
  gap: "16px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});

const RecommendedItems = styled(Box)({
  padding: "24px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "2px",
  margin: "5% 0",
});
export {
  CustomSection,
  ActionRow,
  CustomSummary,
  CustomCartMain,
  RecommendedItems,
};
