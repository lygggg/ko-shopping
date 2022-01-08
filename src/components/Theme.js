import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Theme = () => {
  return (
    <>
      <ThemeDiv>
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <img
              src={
                "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191_960_720.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://cdn.pixabay.com/photo/2021/02/02/02/40/souvenirs-5972500_960_720.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://cdn.pixabay.com/photo/2016/11/29/13/37/christmas-1869902_960_720.jpg"
              }
            />
          </SwiperSlide>
        </Swiper>
      </ThemeDiv>
    </>
  );
};

const ThemeDiv = styled.div`
  height: 400px;
`;

export default Theme;
