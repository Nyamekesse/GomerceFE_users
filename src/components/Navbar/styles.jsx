import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const customAppBarStyle = (theme) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  maxWidth: "1440px",
  height: "90px",
  padding: "20px, 53px",
  margin: "0 auto",
  backgroundColor: "#fff",
  [theme.breakpoints.down("laptop")]: {
    // display: "none",
  },
});

const toolBarStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const StyledButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 0,
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "368px",
  height: "34px",
  [theme.breakpoints.down("laptop")]: {
    width: "100px",
  },
}));

const buttonStyles = {
  width: "114px",
  height: "34px",
  border: "none",
  color: "#1F2839",
  padding: "8px",
  backgroundColor: "#F4F5EF",
  "&:hover": {
    backgroundColor: "#F4F5EF",
    border: "none",
  },
};

export { customAppBarStyle, toolBarStyles, StyledButtonGroup, buttonStyles };
