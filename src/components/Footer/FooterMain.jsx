import styles from './FooterMain.module.scss';
import { Icons } from '../Icons/Icons';
import baner from '../../assets/images/bonbon-main_footer.png';
import flower from '../../assets/picture/flower.svg';


function FooterMain() {
  return (
    <footer className={styles.footer}>
      <img src={baner} alt="bonbon-main_footer" className={styles.footer_img} />
      <div className={styles.footer__container}>
        <div className={styles.footer__map__wrapper}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href="https://yandex.ru/maps/org/bon_bon/217049081924/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '0px',
              }}
            >
              Bon-Bon
            </a>
            <a
              href="https://yandex.ru/maps/47/nizhny-novgorod/category/flowers_and_bouquets_delivery/184108319/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '14px',
              }}
            >
              Доставка цветов и букетов в Нижнем Новгороде
            </a>
            <a
              href="https://yandex.ru/maps/47/nizhny-novgorod/category/flower_shop/184108325/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '28px',
              }}
            >
              Магазин цветов в Нижнем Новгороде
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?from=api-maps&ll=44.004658%2C56.305212&mode=search&oid=217049081924&ol=biz&origin=jsapi21&sll=44.016551%2C56.319245&sspn=0.068064%2C0.023133&text=%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20Bon-Bon&z=13"
              width="560"
              height="400"
              frameBorder="1"
              allowFullScreen="true"
              style={{ position: 'relative' }}
            ></iframe>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__flower}>
            <img src={flower} alt="flower" className={styles.flower} />
          </div>
          <div className={styles.titles__wrapper}>
            <p className={styles.footer__title}>BonBon</p>
            <p className={styles.footer__title}>flowers boutique</p>
          </div>
          <div className={styles.contacts__wrapper}>
            <a
              className={styles.contacts__phone}
              href="tel:+7 903 849 2777"
              aria-label="Позвонить по телефону +7 903 888 9977"
            >
              <p>+7 903 849 2777</p>
            </a>
            <div className={styles.contacts__working__hours}>
              <p className={styles.contacts__working__hours__title}>График работы:</p>
              <p className={styles.contacts__working__hours__text}>
                <p>Пн-Пт с 9:00 до 20:00</p>
                <p>Сб-Вс с 10:00 до 18:00</p>
              </p>
            </div>
            <div className={styles.contacts__address}>
              <p>г. Нижний Новгород,</p>
              <p>пл. Свободы, д.7</p>
            </div>
            <a className={styles.contacts__mail} href="mailto:bon-bonnn@yandex.ru">
              <p>bon-bonnn@yandex.ru</p>
            </a>
            <div className={styles.contacts__icons}>
              <a
                className={styles.contacts__whatsapp__icon}
                href="https://api.whatsapp.com/send/?phone=%2B79038492777&text&type=phone_number&app_absent=0"
              >
                <Icons
                  className={styles.contacts__whatsapp__icon}
                  name="whatsapp"
                  size="40"
                  color="#ffebce"
                />
              </a>
              <a className={styles.contacts__vk__icon} href="https://vk.com/bon_bon52">
                <Icons className={styles.contacts__vk__icon} name="vk" size="40" color="#ffebce" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.footer__divider} />
      <div className={styles.footer__container__team}>
        <div className={styles.policy__wrapper}>
          <a className={styles.policy__offer} href="#">
            <p>Оферта</p>
          </a>
          <a className={styles.policy__policy} href="#">
            <p>Политика</p>
          </a>
          <a className={styles.policy__delivery__payment} href="#">
            <p>Доставка и оплата</p>
          </a>
        </div>
        <a className={styles.contacts__team} href="#">
          <p>Ⓒ Команда</p>
        </a>
      </div>
    </footer>
  );
}

export { FooterMain };
