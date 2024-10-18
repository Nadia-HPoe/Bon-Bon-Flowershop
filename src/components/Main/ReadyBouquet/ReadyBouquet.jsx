import { useState, useEffect } from 'react';
import CarouselCard from '../../CarouselCard/CarouselCard';
import Slider from '../../Slider/Slider';
import styles from './ReadyBouquet.module.scss';

const dataUrl = '/flowers.json';

const ReadyBouquet = () => {
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setBouquets(data))
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  }, []);

  const items = bouquets.map((item) => <CarouselCard key={item.id} {...item} />);

  return (
    <section>
      <h2 className={styles.ready_bouquet__title}>Готовые букеты</h2>
      <Slider items={items} />
    </section>
  );
};

export default ReadyBouquet;
