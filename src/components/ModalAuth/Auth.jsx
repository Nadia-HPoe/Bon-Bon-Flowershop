import React from 'react';
import { Icons } from '../Icons';
import './Auth.module.scss';
import Modal from 'react-modal';

const Auth = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'auth-overlay'}
      className={'auth-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <div className="auth">
        <div className="auth-top">
          <button className="button__close" onClick={() => onClose()}>
            <Icons className="icon__close" name="cross" size="27" color="black" />
          </button>
        </div>
        <div className="auth-container">
          <div className="button">Войти</div>
          <div className="button">Зарегистрироваться</div>
        </div>
      </div>
    </Modal>
  );
};

export { Auth };
