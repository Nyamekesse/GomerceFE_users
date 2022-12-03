import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const PageHeader = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

const StatusBadge = styled(Box)(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1% 0",
  width: "151.14px",
  borderRadius: "4px",
  color: "#fff",
  backgroundColor: `${color}`,
  textTransform: "uppercase",
}));
export { PageHeader, StatusBadge };
