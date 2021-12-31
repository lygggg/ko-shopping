import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const Theme = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>#겨울 방한템</SwiperSlide>
        <SwiperSlide>#나를 위한 선물</SwiperSlide>
        <SwiperSlide>#너를 위한 선물</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Theme;
