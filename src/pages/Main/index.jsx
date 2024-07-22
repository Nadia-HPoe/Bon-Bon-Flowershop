import { useState } from "react";
import { ModalCard } from "../../components/ModalCard/ModalCard";
import MainBanner from "../../components/Main/MainBanner/MainBanner";
import Categories from "../../components/Main/Categories/Categories";

function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <MainBanner />
      <div>
        <button onClick={() => setModalIsOpen(true)}>Заказать</button>
        <ModalCard
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        ></ModalCard>
      </div>
      <Categories />
    </div>
  );
}

export { Main };
