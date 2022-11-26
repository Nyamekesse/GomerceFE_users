import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BreadCrumbs from "../../components/breadCrumbs";
import {
  Delivery,
  DetailsMain,
  Frame,
  InfoWrapper,
  OrderInfo,
  PageHeader,
  ProductSummary,
} from "./OrderDetailStyle";
import Tracking from "./Tracking";
import orderInfo from "../../SetUpData/orderInfo";
import { CustomDivider } from "../../components/CheckOut/Checkout";
import SummaryTable from "./SummaryTable";
const OrdersDetail = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Detail", link: "/" },
  ];
  return (
    <>
      <PageHeader>
        <Typography variant="h5">Orders detail</Typography>
        <BreadCrumbs navigation={navigation} />
      </PageHeader>
      <Delivery>
        <Typography
          variant="body2"
          sx={{ textTransform: "uppercase", fontWeight: "400" }}
        >
          tracking order no: {"28vv178145"}
        </Typography>
        <Frame>
          <Typography variant="body-2">
            <b>Shipped via:</b>
            {" lorem ipsum "}
          </Typography>
          <Typography variant="body-2" sx={{ margin: "0 2%" }}>
            <b>Status:</b>
            {" Packaging "}
          </Typography>
          <Typography variant="body-2">
            <b>Expected delivery date:</b> 01/01/2023
          </Typography>
        </Frame>
        <Tracking />
      </Delivery>
      <DetailsMain>
        <Typography
          variant="body2"
          sx={{ textTransform: "capitalize", fontWeight: "400" }}
        >
          <b>order id: {"#920145"}</b>
        </Typography>
        <InfoWrapper>
          {orderInfo.map((info, index) => {
            const { label, description } = info;
            return (
              <OrderInfo key={index}>
                <Typography variant="caption" mb={1}>
                  <b>{label}</b>
                </Typography>
                <Typography variant="caption">{description}</Typography>
              </OrderInfo>
            );
          })}
        </InfoWrapper>
        <CustomDivider />
        <ProductSummary>
          <Typography
            variant="body2"
            sx={{
              textTransform: "capitalize",
              fontWeight: "400",
              margin: "0.5% auto",
            }}
          >
            <b>Product summary</b>
          </Typography>
          <SummaryTable />
        </ProductSummary>
      </DetailsMain>
    </>
  );
};

export default OrdersDetail;
