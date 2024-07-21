import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "../../assets/images/bonbon-image1.jpg";
import modalcardStyles from "../ModalCard/modalcard.module.scss";

const ModalCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={modalcardStyles.images}>
      <Swiper
        spaceBetween={5}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={3}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { ModalCarousel };
