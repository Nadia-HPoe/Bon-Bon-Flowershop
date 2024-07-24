import { useState } from 'react';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import MainBanner from '../../components/Main/MainBanner/MainBanner';
import Categories from '../../components/Main/Categories/Categories';
import Container from '../../components/Container/Container';
import ReadyBouquet from '../../components/ReadyBouquet/ReadyBouquet';
import styles from '../../components/CarouselCard/CarouselCard.module.scss';

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <MainBanner />
      <div>
        <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
          Купить
        </button>
        <ModalCard isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}></ModalCard>
      </div>
      <Container>
        <ReadyBouquet />
        <Categories />
      </Container>
    </div>
  );
}

export { Main };
