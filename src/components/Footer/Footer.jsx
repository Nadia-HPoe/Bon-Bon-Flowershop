import styles from "./Footer.module.scss";
import { Icons } from "../Icons/Icons";
import logo from "../../assets/logo/Bon_bon_logo.png";

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
              href="tel:+7 903 888 9977"
              aria-label="Позвонить по телефону +7 903 888 9977"
            >
              <p>+7 903 888 9977</p>
            </a>
            <a className={styles.contacts__mail} href="mailto:bonbon@gmail.com">
              <p>bonbon@gmail.com</p>
            </a>
            <div className={styles.contacts__address}>
              <p>Нижний Новгород,</p>
              <p>ул. Свободы, д.7</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.contacts__working__hours}>
            <p className={styles.contacts__working__hours__title}>
              График работы:
            </p>
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
              <Icons name="icon-whatsapp" size="40" color="biege" />
            </a>
            <a
              className={styles.contacts__vk__icon}
              href="https://vk.com/bon_bon52"
            >
              <Icons name="icon-vk" size="40" color="biege" />
            </a>
          </div>
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
