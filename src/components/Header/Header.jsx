import React, { useState } from 'react';
import { Cart } from '../ModalCart/Cart';
import { Icons } from '../Icons';
import Logo from '../../assets/images/logo.svg';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__leftContainer}>
            <div className={styles.header__logo}>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <nav>
              <ul className={styles.header__menu}>
                <li className={styles.header__menuItem}>
                  < Link to="/catalogue" className={styles.header__menuLink}>
                    Каталог
                  </Link>
                </li>
                <li className={styles.header__menuItem}>
                  <Link to="/about" className={styles.header__menuLink}>
                    О нас
                  </Link>
                </li>
                <li className={styles.header__menuItem}>
                  <Link to="/blog" className={styles.header__menuLink}>
                    Блог
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.header__rightContainer}>
            <div className={styles.header__search}>
              <Icons name="magnifying-glass" size="26" color="#042423" />
              <input type="text" className={styles.header__input} />
            </div>
            <div className={styles.header__phone}>
              <div className={styles.header__phoneNumber}>+7 999 111 22 33</div>
              <a href="https://wa.me/message/CGNNUIQSEJQYB1">
                <Icons name="phone" size="35" color="#023E3B" />
              </a>
            </div>
            <div className={styles.header__icons}>
              <a href="#" className={styles.header__icon}>
                <Icons name="user" size="28" color="#727272" />
              </a>
              <a href="#" className={styles.header__icon}>
                <Icons className={styles.icon__heart} name="heart" size="22" color="#EBEBEB" />
              </a>
              {/* <a href="#" className={styles.header__icon}>
                <Icons name="shopping-cart" size="32" color="#727272" />
              </a> */}
              <button className={styles.header__icon} onClick={() => setCartIsOpen(true)}>
                <Icons name="shopping-cart" size="32" color="#727272" />
              </button>
              <Cart isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)}></Cart>
            </div>
          </div>
        </div>
      </header >
    </div >
  );
};

export { Header };
