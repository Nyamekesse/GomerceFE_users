import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import BreadCrumbs from "../../components/breadCrumbs";
import ItemImage from "./ItemImage";
import barDetails from "../../SetUpData/RatingProgressBar";
import {
  Card,
  Details,
  ItemDetails,
  ListWrap,
  RatingSummary,
  ReviewsSection,
  Specifications,
  Wrap,
} from "./ItemPageStyle";
import Ratings from "./Ratings";
import { CustomDivider } from "../../components/CheckOut/Checkout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import cards from "../../SetUpData/sliderData";
import { RecommendedItems } from "../CartPage/CartPageStyling";
import ProductCard from "../../components/ProductCard";
import LinearProgressBar from "./LinearProgressBar";
import CommentsCard from "./CommentsCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
SwiperCore.use([Navigation, A11y]);
const ItemPage = () => {
  const navigation = [
    { label: "Home", link: "/" },
    { label: "Collection", link: "/" },
    { label: "Item Title", link: "/" },
  ];

  return (
    <>
      <BreadCrumbs navigation={navigation} />
      <Details>
        <Grid
          container
          direction="row"
          mt={2}
          mb={3}
          justifyContent="space-between"
        >
          <Grid item xs={4}>
            <ItemImage />
          </Grid>
          <Grid item xs={8}>
            <ItemDetails>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body2" noWrap>
                    Infinix Smart 6,6.6", 2GB RAM, 5000mAh, Polar Black
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#F4F5EF",
                      padding: "1%",
                      marginRight: "2%",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                    }}
                  >
                    <FavoriteIcon />
                  </Box>
                </Box>
                <Typography variant="caption" sx={{ margin: "2% 0" }} noWrap>
                  Brand: {"Infinix"} Similar products to infinix
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Ratings readOnly={true} /> &nbsp;&nbsp;
                  <Typography variant="caption" noWrap>
                    from {"27"} verified viewers
                  </Typography>
                </Box>
                <CustomDivider />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "24px", fontWeight: "600" }}
                  noWrap
                >
                  ${"10.99"}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ margin: "2% 0", fontSize: "12px" }}
                  noWrap
                >
                  In Stock
                </Typography>
                <Typography variant="caption" noWrap>
                  + shipping from --- to ---
                </Typography>
                <Box mt={2} mb={1}>
                  <Button
                    variant="contained"
                    fullWidth={false}
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ backgroundColor: "#1F2839" }}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
              <CustomDivider />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2" noWrap>
                  Share this product
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "2% 0",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F4F5EF",
                      padding: "1%",
                      marginRight: "2%",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                    }}
                  >
                    <FacebookIcon />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#F4F5EF",
                      padding: "1%",
                      marginRight: "2%",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                    }}
                  >
                    <TwitterIcon />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#F4F5EF",
                      padding: "1%",
                      marginRight: "2%",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                    }}
                  >
                    <InstagramIcon />
                  </Box>
                </Box>
              </Box>
            </ItemDetails>
          </Grid>
        </Grid>
      </Details>
      <Specifications>
        <Typography variant="h5" sx={{ margin: "2% 0" }}>
          Specifications
        </Typography>
        <Wrap>
          <Card>
            <Typography variant="h6">Key features</Typography>
            <CustomDivider />
            <ListWrap>
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "16px",
                      margin: "5% 0",
                    }}
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </li>
              ))}
            </ListWrap>
          </Card>
          <Card>
            <Typography variant="h6">What's in the box</Typography>
            <CustomDivider />
            <ListWrap>
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "16px",
                      margin: "5% 0",
                    }}
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </li>
              ))}
            </ListWrap>
          </Card>
          <Card>
            <Typography variant="h6">Specifications</Typography>
            <CustomDivider />
            <ListWrap>
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "16px",
                      margin: "5% 0",
                    }}
                    gutterBottom
                  >
                    Lorem Ipsum
                  </Typography>
                </li>
              ))}
            </ListWrap>
          </Card>
        </Wrap>
      </Specifications>
      <ReviewsSection>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h6">Ratings and reviews</Typography>
          <Typography variant="caption">
            <b>Ratings and reviews are verified</b>
          </Typography>
        </Box>
        <RatingSummary>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              height: "100%",
            }}
          >
            <Typography variant="h5">4.2</Typography>
            <Ratings margin={"10% 0%"} readOnly={true} />
            <Typography variant="caption">{"124"} reviews</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "2% 1.5%",
              width: "879px",
            }}
          >
            {barDetails.map((detail) => {
              const { label, value } = detail;
              return <LinearProgressBar label={label} value={value} />;
            })}
          </Box>
        </RatingSummary>
        <CommentsCard />
        <CommentsCard />
      </ReviewsSection>
      <RecommendedItems>
        <Typography variant="h6" mb={5}>
          Recommended items
        </Typography>
        <Swiper
          navigation={true}
          grabCursor={true}
          modules={[Navigation, A11y]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
        >
          {cards.data.map((card, index) => {
            return (
              <SwiperSlide>
                <ProductCard
                  key={index}
                  name={card.name}
                  image={card.image}
                  price={card.price}
                  description={"Item description"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </RecommendedItems>
    </>
  );
};

export default ItemPage;
