import bouquetImage from '../../../assets/images/bouquets/bouquet-1.png';
import CarouselCard from '../../CarouselCard/CarouselCard';
import Slider from '../../Slider/Slider';

import styles from './Bestsellers.module.scss';

export default function Bestsellers() {
  const bouquet = {
    price: '10 000',
    img: bouquetImage,
  };

  const bouquets = Array.from({ length: 12 }, () => ({ ...bouquet }));
  const items = bouquets.map((item) => <CarouselCard {...item} />);

  return (
    <div>
      <h2 className={styles.ready_bouquet__title}>Бестселлеры</h2>
      <Slider items={items} />
    </div>
  );
}
