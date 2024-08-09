import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';

import styles from './Slider.module.scss';
import './style.scss';

export default function Slider({ items }) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      initialSlide={5}
      centeredSlides={true}
      preventClicks={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 50,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      pagination={{
        clickable: true,
        bulletClass: styles.bullet,
        bulletActiveClass: styles.bullet__active,
      }}
      navigation={{
        clickable: true,
        dynamicBullets: true,
      }}
      className={styles.swiper}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
