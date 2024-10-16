import React, { useState } from 'react';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import MainBanner from '../../components/Main/MainBanner/MainBanner';
import Categories from '../../components/Main/Categories/Categories';
import Container from '../../components/Container/Container';
import ReadyBouquet from '../../components/Main/ReadyBouquet/ReadyBouquet';
import Title from '../../components/Title/Title';
import styles from '../../components/CarouselCard/CarouselCard.module.scss';
import { Header } from '../../components/Header/Header';
import { FooterMain } from '../../components/Footer/FooterMain';
import Bestsellers from '../../components/Main/Bestsellers/Bestsellers';
import Reviews from '../../components/Main/Reviews/Reviews';
import PhotoCarousel from '../../components/Main/PhotoCarousel/PhotoCarousel';

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
        <Bestsellers />
        <Reviews />
      </Container>
      <PhotoCarousel />
      <FooterMain />
    </div>
  );
}

export { Main };
