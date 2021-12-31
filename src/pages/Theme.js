import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Theme = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
          <StyledLink to={`/themes/13/products`}>#겨울 방한템</StyledLink>
        </SwiperSlide>
        <SwiperSlide>#나를 위한 선물</SwiperSlide>
        <SwiperSlide>#너를 위한 선물</SwiperSlide>
      </Swiper>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Theme;
