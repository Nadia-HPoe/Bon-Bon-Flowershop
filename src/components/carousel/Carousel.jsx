import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Carousel.module.scss';

function Carousel({ items }) {
  const pagination = {
    clickable: true,
  };

  return (
    <div className={styles.wrapper}>
      <h3>Готовые букеты</h3>
      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        navigation={true}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
        breakpoints={{ 900: { slidesPerView: 2 } }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
