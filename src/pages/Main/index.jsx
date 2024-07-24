import React, { useState } from 'react';
import { ModalCard } from '../../components/ModalCard/ModalCard';
import MainBanner from '../../components/Main/MainBanner/MainBanner';
import Categories from '../../components/Main/Categories/Categories';
import Container from '../../components/Container/Container';
import ReadyBouquet from '../../components/ReadyBouquet/ReadyBouquet';
import Title from '../../components/Title/Title';

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <MainBanner />
      <Title />
      <div>
        <button onClick={() => setModalIsOpen(true)}>Заказать</button>
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
