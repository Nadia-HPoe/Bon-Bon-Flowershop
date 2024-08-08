import CarouselCard from '../../CarouselCard/CarouselCard';

import bouquetImage from '../../../assets/images/bouquets/bouquet-1.png';

import Slider from '../../Slider/Slider';
import styles from './ReadyBouquet.module.scss';

function ReadyBouquet() {
  const bouquet = {
    price: '10 000',
    img: bouquetImage,
  };

  const bouquets = Array.from({ length: 12 }, () => ({ ...bouquet }));
  const items = bouquets.map((item) => <CarouselCard {...item} />);

  return (
    <div>
      <h2 className={styles.ready_bouquet__title}>Готовые букеты</h2>
      <Slider items={items} />
    </div>
  );
}

export default ReadyBouquet;
