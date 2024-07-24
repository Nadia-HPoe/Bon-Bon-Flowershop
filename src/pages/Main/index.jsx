import React, { useState } from "react";
import { ModalCard } from "../../components/ModalCard/ModalCard";
function Main() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    ///кнопка для вызова модального окна товара
    <div>
      <button onClick={() => setModalIsOpen(true)}>Заказать</button>
      <ModalCard
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      ></ModalCard>
    </div>
  );
}

export { Main };
