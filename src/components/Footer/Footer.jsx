import styles from './Footer.module.scss';
import { Icons } from '../Icons/Icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__map__wrapper}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.ru/maps/43/kazan/search/%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '0px',
            }}
          >
            BonFlower
          </a>
          <a
            href="https://yandex.ru/maps/43/kazan/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px',
            }}
          >
            Доставка цветов и букетов
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=5.305773%2C60.402499&mode=search&poi%5Bpoint%5D=5.305773%2C60.402499&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjI3ODk5NTgwEh1Ob3JnZSwgVmVzdGxhbmQgZnlsa2UsIEJlcmdlbiIKDTtlqkAVwZBxQg%2C%2C&sctx=ZAAAAAgBEAAaKAoSCWEzwAXZPkxAEZ6ZYDjXkkdAEhIJoFOQn41TUEARAOZatACdP0AiBgABAgMEBSgKOABAh4UGSABqAnJ1nQHNzMw9oAEAqAEAvQHLMmVgwgGKAdmwj7%2FWAq%2F4mu7RBcj4r66oBLOczfrjAfTEvvvwAq3y7NOoBtST4eazA5Ki2fV1q9Sf4wWN0cbsBJv1w4QEuqLr6LIBqsiOhwfi8M%2FehgfhpeOCWN3x5baMAvzHlL72Bp3UgfEFrM7X16EDvqL22gaGj6XvA%2BX5oo4F6fr80iOR3KTV0gX00rHABIICG9C80LDQs9Cw0LfQuNC9INGG0LLQtdGC0L7QsooCCTE4NDEwODMyNZICAJoCDGRlc2t0b3AtbWFwc6oCbzY1NTQxMTA4NTI5LDIyOTQzMzEyMjEzMCwyMDg5NTI3MDU0MTgsMTk5MDIxMDI3MDI5LDg5MTAyMTU5MDQ0LDE4NDc5MDkzNjkzOSw3MDY4MDMzMzYyMiwzOTQ3NTQ2Mzg4LDE0MTI2MTI2MDg3NA%3D%3D&sll=31.015263%2C63.711771&source=mapframe&sspn=62.212519%2C19.833811&text=vfufpby%20wdtnjd&utm_source=mapframe&z=4.51"
            width="600"
            height="474"
            frameBorder="1"
            allowFullScreen="true"
            style={{ position: 'relative' }}
          ></iframe>
        </div>
      </div>
      <div className={styles.footer__contacts}>
        <div className={styles.contacts__wrapper}>
          <div className={styles.titles__wrapper}>
            <p className={styles.footer__title}>BonFlower</p>
            <p className={styles.footer__title}>Цветочный бутик</p>
            <a
              className={styles.contacts__phone}
              href="tel:+79001234567"
              aria-label="Позвонить по телефону +79001234567"
            >
              <p>+7 900-123-45-67</p>
            </a>
          </div>

          <div className={styles.contacts__working__hours}>
            <p className={styles.contacts__working__hours__title}>График работы:</p>
            <p className={styles.contacts__working__hours__text}>
              <p>Пн-Пт с 9:00 до 20:00</p>
              <p>Сб-Вс с 10:00 до 18:00</p>
            </p>
          </div>
          <div className={styles.contacts__address}>
            <p>г. Москва</p>
            <p>пл. Победы, д.17</p>
          </div>
          <a className={styles.contacts__mail} href="mailto:bon-flower@mail.ru">
            <p>bon-flower@mail.ru</p>
          </a>
          <div className={styles.contacts__icons}>
            <a
              className={styles.contacts__whatsapp__icon}
              href="https://api.whatsapp.com/send/?phone=%2B79001234567&text&type=phone_number&app_absent=0"
            >
              <Icons
                className={styles.contacts__whatsapp__icon}
                name="whatsapp"
                size="58"
                color="#676767"
              />
            </a>
            <a className={styles.contacts__vk__icon} href="https://vk.com/bon_flower">
              <Icons className={styles.contacts__vk__icon} name="vk" size="58" color="#676767" />
            </a>
          </div>
        </div>
        <div className={styles.policy__wrapper}>
          <Link to="/catalogue" className={styles.policy__offer}>
            <p>Каталог</p>
          </Link>
          <Link to="/about" className={styles.policy__offer}>
            <p>О нас</p>
          </Link>
          <Link to="/blog" className={styles.policy__offer}>
            <p>Блог</p>
          </Link>
          <Link to="" className={styles.policy__offer}>
            <p>Оферта</p>
          </Link>
          <Link to="" className={styles.policy__policy}>
            <p>Политика</p>
          </Link>
          <Link to="/delivery" className={styles.policy__delivery__payment}>
            <p>Доставка и оплата</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Footer };
