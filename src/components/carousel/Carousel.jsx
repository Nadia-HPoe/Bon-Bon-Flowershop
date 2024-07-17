import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Carousel.module.scss';


function Carousel() {
  const pagination = {
    clickable: true,
  };

  return (

        <div className={styles.wrapper}>
            <Swiper
            spaceBetween={25}
            slidesPerView={1}
            navigation={true}
            pagination={pagination}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
            breakpoints={{ 900: { slidesPerView: 2 } }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  {React.Children.map(children, (child) => React.cloneElement(child, { item }))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
    </div>
  );
}

export default Carousel;
