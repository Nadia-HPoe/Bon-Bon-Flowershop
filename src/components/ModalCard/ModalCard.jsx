import { useState } from 'react';
import { Icons } from '../../components/Icons';
import Image from '../../assets/images/bonbon-image1.jpg';
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
          <h2 className={modalcardStyles.title}>Название букета</h2>
          <p className={modalcardStyles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet urna at purus
            ullamcorper, non iaculis diam sagittis. Nulla mi orci, feugiat eu vulputate id,
            dignissim sed ex. Integer cursus luctus odio ut condimentum. Integer ullamcorper sed
            ipsum id commodo. Morbi iaculis risus ac diam dictum hendrerit. Fusce suscipit risus
            sem, a porttitor libero venenatis ut. Integer vehicula, nulla tincidunt laoreet varius,
            sem elit laoreet sem, eget pretium ante dui ut magna.
          </p>
          <form className={modalcardStyles.form}>
            <div className={modalcardStyles.form__container}>
              <input
                type="radio"
                name="radio"
                value="S"
                checked={value == 'S' ? true : false}
                onChange={changeSize}
              />
              <label htmlFor="S">S</label>
            </div>
            <div className={modalcardStyles.form__container}>
              <input
                type="radio"
                name="radio"
                value="M"
                checked={value == 'M' ? true : false}
                onChange={changeSize}
              />
              <label htmlFor="M">M</label>
            </div>
            <div className={modalcardStyles.form__container}>
              <input
                type="radio"
                name="radio"
                value="L"
                checked={value == 'L' ? true : false}
                onChange={changeSize}
              />
              <label htmlFor="L">L</label>
            </div>
          </form>

          <p className={modalcardStyles.price}>2 500 ₽</p>
          <div className={modalcardStyles.buttons}>
            <button className={modalcardStyles.button__order} onClick={() => onClose()}>
              Заказать
            </button>
            <button className={modalcardStyles.button__like}>
              <Icons
                className={modalcardStyles.icon__like}
                name="heart"
                size="55"
                color="#e457ad"
              />
            </button>
          </div>
        </div>

        <button className={modalcardStyles.button__close} onClick={() => onClose()}>
          <Icons className={modalcardStyles.icon} name="cross" size="28" color="gray" />
        </button>
      </div>
    </Modal>
  );
};

export { ModalCard };
