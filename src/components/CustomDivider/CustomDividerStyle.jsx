import { Divider, styled } from "@mui/material";

const CustomDivider = styled(Divider)(({ theme }) => ({
  width: "100%",
  border: "1px solid #CED4DA",
  flex: "none",
  order: "0",
  alignSelf: "stretch",
  margin: "2% 0",
}));

export { CustomDivider };
