import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Details = styled(Box)({
  width: "100%",
  height: "553px",
  background: "#FFFFFF",
  padding: "2%",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});

const Image = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "337px",
  height: "406px",
  background: "#FFFFFF",
});
const Preview = styled("div")(({ img }) => ({
  width: "305px",
  height: "305px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${img})`,
  border: "none",
}));
const ThumbnailsSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "2% 0 1%",
});
const Thumbnail = styled("div")(({ img }) => ({
  width: "50px",
  height: "50px",
  objectFit: "contain",
  backgroundSize: "cover",
  backgroundImage: `url(${img})`,
  border: "none",
}));
const ItemDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  background: "#fff",
  width: "100%",
});

const Wrap = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: "60px",
});
const Card = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "428px",
  height: "296px",
  background: "#FFFFFF",
  border: "1px solid #AEAEAE",
  borderRadius: "8px",
  padding: "2%",
});
const ListWrap = styled("ul")({
  width: "100%",
  height: "100%",
  marginLeft: "5%",
});
const Specifications = styled(Box)({
  margin: "3% 0",
  padding: "1.5% 2.5%",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});
const ReviewsSection = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "24px",
  background: "#FFFFFF",
  boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
});
const RatingSummary = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "2%",
  width: "100%",
  height: "100%",
});
export {
  Details,
  Image,
  Preview,
  Thumbnail,
  ThumbnailsSection,
  ItemDetails,
  Specifications,
  Wrap,
  Card,
  ListWrap,
  ReviewsSection,
  RatingSummary,
};
