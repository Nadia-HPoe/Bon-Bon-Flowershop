import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import styles from '../Catalogue/Catalogue.module.scss';
import { Header } from '../../components/Header/Header';
import { Icons } from '../../components/Icons';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import { Footer } from '../../components/Footer/Footer';
const Catalogue = () => {
  const [flowers, setFlowers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                    <div className={styles.button_container}>
                      <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
                        {isMobile ? <Icons name="cart" size="20" color="#c76b6f" /> : 'Купить'}
                      </button>
                    </div>
                    <ModalCard
                      isOpen={modalIsOpen}
                      onClose={() => setModalIsOpen(false)}
                    ></ModalCard>
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
                    <div className={styles.button_container}>
                      <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
                        {isMobile ? <Icons name="cart" size="20" color="#c76b6f" /> : 'Купить'}
                      </button>
                    </div>
                    <ModalCard
                      isOpen={modalIsOpen}
                      onClose={() => setModalIsOpen(false)}
                    ></ModalCard>
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
                    <div className={styles.button_container}>
                      <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
                        {isMobile ? <Icons name="cart" size="20" color="#c76b6f" /> : 'Купить'}
                      </button>
                    </div>
                    <ModalCard
                      isOpen={modalIsOpen}
                      onClose={() => setModalIsOpen(false)}
                    ></ModalCard>
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
                    <div className={styles.button_container}>
                      <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
                        {isMobile ? <Icons name="cart" size="20" color="#c76b6f" /> : 'Купить'}
                      </button>
                    </div>
                    <ModalCard
                      isOpen={modalIsOpen}
                      onClose={() => setModalIsOpen(false)}
                    ></ModalCard>
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
                    <div className={styles.button_container}>
                      <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
                        {isMobile ? <Icons name="cart" size="20" color="#c76b6f" /> : 'Купить'}
                      </button>
                    </div>
                    <ModalCard
                      isOpen={modalIsOpen}
                      onClose={() => setModalIsOpen(false)}
                    ></ModalCard>
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
                    <div className={styles.button_container}>
                      <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
                        {isMobile ? <Icons name="cart" size="20" color="#c76b6f" /> : 'Купить'}
                      </button>
                    </div>
                    <ModalCard
                      isOpen={modalIsOpen}
                      onClose={() => setModalIsOpen(false)}
                    ></ModalCard>
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
