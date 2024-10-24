import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import styles from '../Catalogue/Catalogue.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

// const dataUrl = '/flowers.json';

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

  // const [products, setProducts] = useState([]);
  // const [displayedProducts, setDisplayedProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [showMoreButton, setShowMoreButton] = useState(false);

  // const productsData = [
  //   { title: 'Букет 1', description: 'Описание букета 1', price: 10000 },
  //   { title: 'Букет 2', description: 'Описание букета 2', price: 10000 },
  //   { title: 'Букет 3', description: 'Описание букета 3', price: 10000 },
  //   { title: 'Букет 4', description: 'Описание букета 4', price: 10000 },
  //   { title: 'Букет 5', description: 'Описание букета 5', price: 10000 },
  //   { title: 'Букет 6', description: 'Описание букета 6', price: 10000 },
  //   { title: 'Букет 7', description: 'Описание букета 7', price: 10000 },
  //   { title: 'Букет 8', description: 'Описание букета 8', price: 10000 },
  //   { title: 'Букет 9', description: 'Описание букета 9', price: 10000 },
  //   { title: 'Букет 10', description: 'Описание букета 10', price: 10000 },
  //   { title: 'Букет 11', description: 'Описание букета 11', price: 10000 },
  //   { title: 'Букет 12', description: 'Описание букета 12', price: 10000 },
  // ];

  // useEffect(() => {
  //   setProducts(productsData);
  //   // Отображение первых 9 товаров
  //   setDisplayedProducts(productsData.slice(0, 9));
  //   setIsLoading(false);
  //   setShowMoreButton(true);
  // }, []);

  // const handleShowMore = () => {
  //   setDisplayedProducts([
  //     ...displayedProducts,
  //     ...products.slice(displayedProducts.length, displayedProducts.length + 6),
  //   ]);
  // };

  // if (isLoading) {
  //   return <div>Загрузка...</div>;
  // }

  return (
    <>
      <Header />
      <div className={styles.catalogue}>
        <div className={styles.catalogue__categories}>
          <div className={styles.category}>
            <h2 className={styles.category__title}>Авторские букеты</h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="CatalogueSwiper"
            >
              <SwiperSlide>
                {flowers.map((flower) => (
                  <div key={flower.id} className="flower-item">
                    <img src={flower.img} alt={flower.name} />
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* <div className={styles.catalogue__grid}>
          <div className={styles.catalogue__product}>
            {displayedProducts.map((product, index) => (
              <CatalogueCard
                key={index}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
          <div className={styles.catalogue__button}>
            {showMoreButton && (
              <button className={styles.btn__showmore} onClick={handleShowMore}>
                Смотреть ещё
              </button>
            )}
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
