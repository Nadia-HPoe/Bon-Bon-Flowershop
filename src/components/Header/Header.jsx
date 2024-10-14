import React, { useState } from 'react';
import { Cart } from '../ModalCart/Cart';
import { Icons } from '../Icons';
import Logo from '../../assets/logo/logo.png';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__leftContainer}>
        <div className={styles.header__logo}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul className={styles.header__menu}>
            <li className={styles.header__menuItem}>
              <Link to="/" className={styles.header__menuLink}>
                Главная
              </Link>
            </li>
            <li className={styles.header__menuItem}>
              <Link to="/catalogue" className={styles.header__menuLink}>
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
          <Icons name="magnifying-glass" size="24" color="#0D1616" />
          <input type="text" className={styles.header__input} />
        </div>
        <div className={styles.header__icons}>
          <button className={styles.header__icon}>
            <Icons className={styles.header__user} name="user" size="33" color="#FAE8F1" />
          </button>
          <a href="#" className={styles.header__icon}>
            <Icons className={styles.header__heart} name="heart" size="28" color="#FAE8F1" />
          </a>
          <button className={styles.header__icon} onClick={() => setCartIsOpen(true)}>
            <Icons className={styles.header__cart} name="shopping-cart" size="38" color="#FAE8F1" />
          </button>
          <Cart isOpen={cartIsOpen} onClose={() => setCartIsOpen(false)}></Cart>
        </div>
      </div>
    </header>
  );
};

export { Header };
