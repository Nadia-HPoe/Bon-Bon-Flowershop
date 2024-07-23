import './App.module.scss';
import CarouselCard from './components/CarouselCard/CarouselCard';
import { Header } from './components/Header';
import Carousel from './components/carousel/Carousel';

function App() {
  const bouquet = {
    price: '10 000 РУБ',
    img: '../../assets/images/bouquets/bouquet-1.png',
  };

  const bouquets = Array.from({ length: 10 }, () => ({ ...bouquet }));
  const cards = bouquets.map((item) => <CarouselCard />);

  return (
    <>
      <div>
        <Header />
        {/* <Carousel items={cards} /> */}
        <CarouselCard />
      </div>
    </>
  );
}

export default App;
