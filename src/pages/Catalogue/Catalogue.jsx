import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import styles from '../Catalogue/Catalogue.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
const Catalogue = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/flowers.json');
      const data = await response.json();
      setFlowers(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.catalogue}>
        <div className={styles.catalogue__categories}>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Авторские букеты</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              {flowers.map((flower) => (
                <SwiperSlide key={flower.id}>
                  <div className={styles.category__item}>
                    <img src={flower.img} alt={flower.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Цветы в коробках</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              {flowers.map((flower) => (
                <SwiperSlide key={flower.id}>
                  <div className={styles.category__item}>
                    <img src={flower.img} alt={flower.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Корзины с цветами</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              {flowers.map((flower) => (
                <SwiperSlide key={flower.id}>
                  <div className={styles.category__item}>
                    <img src={flower.img} alt={flower.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Сухоцветы</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              {flowers.map((flower) => (
                <SwiperSlide key={flower.id}>
                  <div className={styles.category__item}>
                    <img src={flower.img} alt={flower.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Свадебные букеты</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              {flowers.map((flower) => (
                <SwiperSlide key={flower.id}>
                  <div className={styles.category__item}>
                    <img src={flower.img} alt={flower.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Подарки</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              {flowers.map((flower) => (
                <SwiperSlide key={flower.id}>
                  <div className={styles.category__item}>
                    <img src={flower.img} alt={flower.name} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
