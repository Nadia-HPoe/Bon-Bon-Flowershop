import styles from './Footer.module.scss';
import { Icons } from '../Icons/Icons';
import logo from '../../assets/logo/Bon_bon_logo.png';
import flower from '../../assets/picture/flower.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__contacts}>
          <div className={styles.logos__wrapper}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p className={styles.footer__title}>flowers boutique</p>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.contacts__wrapper}>
            <a
              className={styles.contacts__phone}
              href="tel:+7 903 849 2777"
              aria-label="Позвонить по телефону +7 903 888 9977"
            >
              <p>+7 903 849 2777</p>
            </a>
            <a className={styles.contacts__mail} href="bon-bonnn@yandex.ru">
              <p>bon-bonnn@yandex.ru</p>
            </a>
            <div className={styles.contacts__address}>
              <p>г. Нижний Новгород,</p>
              <p>пл. Свободы, д.7</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.contacts__working__hours}>
            <p className={styles.contacts__working__hours__title}>График работы:</p>
            <p className={styles.contacts__working__hours__text}>
              <p>Пн-Пт с 9:00 до 20:00</p>
              <p> Сб-Вс с 10:00 до 18:00</p>
            </p>
          </div>
          <div className={styles.contacts__icons}>
            <a
              className={styles.contacts__whatsapp__icon}
              href="https://api.whatsapp.com/send/?phone=%2B79038492777&text&type=phone_number&app_absent=0"
            >
              <Icons name="whatsapp" size="40" color="#ffebce" />
            </a>
            <a className={styles.contacts__vk__icon} href="https://vk.com/bon_bon52">
              <Icons name="vk" size="40" color="#ffebce" />
            </a>
          </div>
        </div>
        <div className={styles.footer__flower}>
          <img src={flower} alt="flower" className={styles.flower} />
        </div>
      </div>
      <hr className={styles.footer__divider} />
      <div className={styles.footer__conrainer__team}>
        <div className={styles.policy__wrapper}>
          <a className={styles.policy__offer} href="">
            <p>Оферта</p>
          </a>
          <a className={styles.policy__policy} href="">
            <p>Политика</p>
          </a>
          <a className={styles.policy__delivery__payment} href="">
            <p>Доставка и оплата</p>
          </a>
        </div>
        <a className={styles.contacts__team} href="">
          <p>Ⓒ Команда</p>
        </a>
      </div>
    </footer>
  );
}

export { Footer };
