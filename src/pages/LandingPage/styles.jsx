import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const CategoriesSideBar = styled(Box)(({ theme }) => ({
  marginTop: "5%",
  backgroundColor: "#ffffff",
  width: "280px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 15px",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
}));

export const categoryText = {
  width: "68px",
  height: "16px",
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  fontWeight: "400",
  color: "#8E8E8E",
  lineHeight: "16px",
};

export const CategoriesListWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

export const listLabelStyles = {
  width: "100%",
  height: "16px",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  color: "#000000",
  textTransform: "capitalize",
};

export const CollectionsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "5% 0 2%",
  padding: "4px",
}));

export const CollectionRow = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginTop: "3%",
  padding: "0px",
  [theme.breakpoints.down("mobile_650")]: {
    flexWrap: "wrap",
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2%",
  width: "279px",
  height: "383px",
  background: "#FDFDFD",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "4px",
  margin: "4px",
  [theme.breakpoints.down("tablet_840")]: {
    width: "240px",
  },
  [theme.breakpoints.down("mobile_650")]: {
    width: "250px",
    height: "",
  },

  [theme.breakpoints.down("mobile_450")]: {
    margin: "4px auto",
  },
}));

export const CardTextHeading = {
  fontWeight: "600",
  fontSize: "18.75px",
  color: "#000000",
  width: "230px",
  height: "22px",
  lineHeight: "22px",
};

export const buttonStyles = {
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

export const BestSellers = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  padding: "2%",
  margin: "1% 0 2%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
  borderRadius: "2px",
}));
