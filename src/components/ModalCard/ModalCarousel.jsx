import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import './modal.scss';
import modalcardStyles from '../ModalCard/modalcard.module.scss';

import { FreeMode, Thumbs } from 'swiper/modules';
import Image from '../../assets/images/bonbon-image1.jpg';
import Image2 from '../../assets/images//bouquets/bouquet-1.png';

const ModalCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={modalcardStyles.images}>
      <Swiper
        spaceBetween={1}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export { ModalCarousel };
