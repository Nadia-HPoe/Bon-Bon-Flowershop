import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import CarouselCard from '../CarouselCard/CarouselCard';

import bouquetImage from '../../assets/images/bouquets/bouquet-1.png';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/effect-coverflow';

import styles from './ReadyBouquet.module.scss';
import './style.scss';

function ReadyBouquet() {
  const bouquet = {
    price: '10 000',
    img: bouquetImage,
  };

  const bouquets = Array.from({ length: 12 }, () => ({ ...bouquet }));
  const items = bouquets.map((item) => <CarouselCard {...item} />);

  return (
    <div>
      <h2>Готовые букеты</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          scale: 0.8,
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

export default ReadyBouquet;
