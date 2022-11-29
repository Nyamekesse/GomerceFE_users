import { Grid, Typography } from "@mui/material";
import React from "react";
import CartMain from "./CartMain";
import { CustomSection, RecommendedItems } from "./CartPageStyling";
import Summary from "./Summary";
import Wrapper from "../../components/Wrapper/Wrapper";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import ProductCard from "../../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import cards from "../../SetUpData/sliderData";
SwiperCore.use([Navigation, A11y]);

const Cart = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Cart;
