import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';

import styles from './Carousel.module.scss';

function Carousel({ items }) {
  return (
    <div className={styles.wrapper}>
      <h3>Готовые букеты</h3>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          scale: 0.75,
          depth: 100,
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
        }}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
