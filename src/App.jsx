import './App.module.scss';
import CarouselCard from './components/CarouselCard/CarouselCard';
import { Header } from './components/Header';
import Carousel from './components/carousel/Carousel';

import bouquetImage from './assets/images/bouquets/bouquet-1.png';

import styles from './App.module.scss';

function App() {
  const bouquet = {
    price: '10 000',
    img: bouquetImage,
  };

  const bouquets = Array.from({ length: 12 }, () => ({ ...bouquet }));
  const cards = bouquets.map((item) => <CarouselCard {...item} />);

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Carousel items={cards} />
      </div>
    </>
  );
}

export default App;
