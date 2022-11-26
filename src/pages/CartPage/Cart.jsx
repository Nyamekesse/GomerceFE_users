import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CartMain from "./CartMain";
import { CustomSection, RecommendedItems } from "./CartPageStyling";
import Summary from "./Summary";
import Slider from "../../components/Slider";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import ProductCard from "../../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import phone_1 from "../../Assets/Images/phone_1.jpg";
import phone_2 from "../../Assets/Images/phone_2.jpg";
import phone_3 from "../../Assets/Images/phone_3.jpg";
SwiperCore.use([Navigation, A11y]);
const cards = {
  category: "Bestsellers",
  data: [
    { image: phone_1, name: "Product A", price: "199.99" },
    { image: phone_2, name: "Product B", price: "439.99" },
    { image: phone_3, name: "Product C", price: "549.99" },
    { image: phone_1, name: "Product D", price: "499.99" },
    { image: phone_2, name: "Product E", price: "79.99" },
    { image: phone_3, name: "Product F", price: "649.99" },
    { image: phone_1, name: "Product G", price: "999.99" },
    { image: phone_2, name: "Product H", price: "1499.99" },
    { image: phone_3, name: "Product I", price: "349.99" },
    { image: phone_1, name: "Product J", price: "999.99" },
  ],
};
const Cart = () => {
  return (
    <>
      <CustomSection mt={3}>
        <Grid
          container
          direction="row"
          mt={2}
          mb={3}
          justifyContent="space-between"
        >
          <Grid item xs={7}>
            <CartMain />
          </Grid>
          <Grid item xs={4}>
            <Summary />
          </Grid>
        </Grid>
      </CustomSection>
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

export default Cart;
