import React, { useState } from 'react';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import MainBanner from '../../components/Main/MainBanner/MainBanner';
import Categories from '../../components/Main/Categories/Categories';
import Container from '../../components/Container/Container';
import ReadyBouquet from '../../components/ReadyBouquet/ReadyBouquet';
import Title from '../../components/Title/Title';
import styles from '../../components/CarouselCard/CarouselCard.module.scss';
import { Header } from '../../components/Header/Header';
import { FooterMain } from '../../components/Footer/FooterMain';

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <MainBanner />
      <Title />
      <div>
        <button className={styles.card__button} onClick={() => setModalIsOpen(true)}>
          Купить
        </button>
        <ModalCard isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}></ModalCard>
      </div>
      <Container>
        <ReadyBouquet />
        <Categories />
        <ReadyBouquet />
      </Container>
      <FooterMain />
    </div>
  );
}

export { Main };
