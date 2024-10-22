import { useState } from 'react';
import { Icons } from '../../components/Icons';
import Modal from 'react-modal';
import { ModalCarousel } from './ModalCarousel';
import modalcardStyles from '../ModalCard/modalcard.module.scss';
import './modal.scss';
const ModalCard = ({ isOpen, onClose, children }) => {
  const [value, setValue] = useState('S');

  function changeSize() {
    setValue(event.target.value);
  }

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <div className={modalcardStyles.container}>
        {children}
        <ModalCarousel />
        <div className={modalcardStyles.info}>
          <div className={modalcardStyles.top}>
            <h2 className={modalcardStyles.title}>Название букета</h2>
            <p className={modalcardStyles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet urna at purus
              ullamcorper, non iaculis diam sagittis. Nulla mi orci, feugiat eu vulputate id,
              dignissim sed ex. Integer cursus luctus odio ut condimentum. Integer ullamcorper sed
              ipsum id commodo. Morbi iaculis risus ac diam dictum hendrerit. Fusce suscipit risus
              sem, a porttitor libero venenatis ut. Integer vehicula, nulla tincidunt laoreet
              varius, sem elit laoreet sem, eget pretium ante dui ut magna.
            </p>
          </div>
          <div className={modalcardStyles.bottom}>
            <p className={modalcardStyles.price}>2 500 ₽</p>
            <button className={modalcardStyles.button__like}>
              <Icons
                className={modalcardStyles.icon__like}
                name="heart"
                size="55"
                color="#FAE8F1"
              />
            </button>
          </div>
          <button className={modalcardStyles.button__order} onClick={() => onClose()}>
            Заказать
          </button>
        </div>

        <button className={modalcardStyles.button__close} onClick={() => onClose()}>
          <Icons className={modalcardStyles.icon} name="cross" size="18" color="black" />
        </button>
      </div>
    </Modal>
  );
};

export { ModalCard };
