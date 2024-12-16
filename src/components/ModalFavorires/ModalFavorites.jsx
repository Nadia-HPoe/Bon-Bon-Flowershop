import Modal from 'react-modal';
import { Icons } from '../Icons';
import Image from '../../assets/images/bonbon-image1.png';
import { Link } from 'react-router-dom';
import './modalfavorites.scss';

const ModalFavorites = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'favorites-overlay'}
      className={'favorites-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <div className="favorites">
        <div className="favorites-top">
          <h1 className="favorites__title">Избранные товары</h1>
          <button className="button__close" onClick={() => onClose()}>
            <Icons className="icon__close" name="cross" size="27" color="black" />
          </button>
        </div>
        <div className="favorites-container favorites-empty">
          <h2 className="favorites__title">Пока ничего нет...</h2>
          <Link className="favorites__link" Link to="/catalogue">
            Перейти в каталог <Icons name="shopping-cart" size="250" color="#fae8f1" />
          </Link>

          <Icons name="shopping-favorites" size="300" color="#fae8f1" />
        </div>
        <div className="favorites-container favorites-full">
          <div className="favorites-list__product_card">
            <img className="favorites-list__product_image" src={Image} alt="" />
            <div className="favorites-list__product_info">
              <h2 className="favorites-list__product_title">Название букета</h2>
              <div className="favorites-list__product_bottom">
                <div className="favorites-list__bottom-info">
                  <p className="favorites-list__product_amount">Количество: 1 шт.</p>
                  <p className="favorites-list__product_price">1 000₽</p>
                </div>
              </div>
            </div>
          </div>
          <div className="favorites-list__product_card">
            <img className="favorites-list__product_image" src={Image} alt="" />
            <div className="favorites-list__product_info">
              <h2 className="favorites-list__product_title">Название букета</h2>
              <div className="favorites-list__product_bottom">
                <div className="favorites-list__bottom-info">
                  <p className="favorites-list__product_amount">Количество: 1 шт.</p>
                  <p className="favorites-list__product_price">1 000₽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="favorites-list_order">
          <button className="favorites-list_order_button favorites-full">ЗАКАЗАТЬ</button>
        </div>
      </div>
    </Modal>
  );
};

export { ModalFavorites };
