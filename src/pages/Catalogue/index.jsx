import React, { useState, useEffect } from 'react';
import CatalogueCard from '../../components/CatalogueCard/CatalogueCard';
import styles from '../Catalogue/Catalogue.module.scss';


function Catalogue() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMoreButton, setShowMoreButton] = useState(false);

  const productsData = [
    { title: 'Букет 1', description: 'Описание букета 1', price: 10000 },
    { title: 'Букет 2', description: 'Описание букета 2', price: 10000 },
    { title: 'Букет 3', description: 'Описание букета 3', price: 10000 },
    { title: 'Букет 4', description: 'Описание букета 4', price: 10000 },
    { title: 'Букет 5', description: 'Описание букета 5', price: 10000 },
    { title: 'Букет 6', description: 'Описание букета 6', price: 10000 },
    { title: 'Букет 7', description: 'Описание букета 7', price: 10000 },
    { title: 'Букет 8', description: 'Описание букета 8', price: 10000 },
    { title: 'Букет 9', description: 'Описание букета 9', price: 10000 },
    { title: 'Букет 10', description: 'Описание букета 10', price: 10000 },
    { title: 'Букет 11', description: 'Описание букета 11', price: 10000 },
    { title: 'Букет 12', description: 'Описание букета 12', price: 10000 },
  ];

  useEffect(() => {
    setProducts(productsData);
    // Отображение первых 9 товаров
    setDisplayedProducts(productsData.slice(0, 9));
    setIsLoading(false);
    setShowMoreButton(true);
  }, []);

  const handleShowMore = () => {
    setDisplayedProducts([...displayedProducts, ...products.slice(displayedProducts.length, displayedProducts.length + 6)]);

  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.catalogue}>
      <h2 className={styles.h2__catalogue}>Каталог</h2>
      <div className={styles.catalogue__categories}>
        <ul className={styles.caregories}>
          <li>Категория 1</li>
          <li>Категория 2</li>
          <li>Категория 3</li>
          <li>Категория 4</li>
          <li>Категория 5</li>
          <li>Категория 6</li>
        </ul>
      </div>

      <div className={styles.catalogue__grid}>
        <div className={styles.catalogue__product}>
          {displayedProducts.map((product, index) => (
            <CatalogueCard key={index} title={product.title} description={product.description} price={product.price} />
          ))}
        </div>
        < div className={styles.catalogue__button}>
          {showMoreButton && (
            <button className={styles.btn__showmore} onClick={handleShowMore}>
              Смотреть ещё
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default Catalogue;