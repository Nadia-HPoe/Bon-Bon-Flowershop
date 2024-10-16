import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/bonbon-about.png';
import styles from './about.module.scss';

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.subtitle}> Bon-Bon — это студия современной флористики.</h2>
          <p className={styles.paragraph}>
            Мы готовы в любой момент порадовать ваших близких замечательными букетами и
            композициями.
          </p>
          <p className={styles.paragraph}>
            В{' '}
            <Link to="/catalogue" className={styles.link}>
              нашем каталоге
            </Link>{' '}
            вы найдете букеты, композиции с шарами, букеты-гиганты, букеты пионовидных роз сорта
            "Мисти бабблз", букеты невесты и многое другое.
          </p>
          <h2 className={styles.subtitle}>Наши преимущества:</h2>
          <ul className={styles.list}>
            <li className={styles.list__item}>высокий уровень работ;</li>
            <li className={styles.list__item}>нестандартные и эффектные авторские решения;</li>
            <li className={styles.list__item}>особый подход к каждому клиенту;</li>
            <li className={styles.list__item}>опытные мастера высокой квалификации;</li>
            <li className={styles.list__item}>только свежие цветы;</li>
            <li className={styles.list__item}>быстрая доставка;</li>
            <li className={styles.list__item}>накопительная бонусная система;</li>
            <li className={styles.list__item}>большой выбор цветов.</li>
          </ul>

          <h2 className={styles.subtitle}>
            Мы бережно собираем ваши эмоции в букеты и композиции, все наши работы собраны с душой!
          </h2>
          <p className={styles.paragraph}>
            Говорят, что нет вечного двигателя, а он есть! И имя ему — любовь. Мы работаем с любовью
            к клиентам и нашему делу!
          </p>
          <h1 className={styles.title}>Bon-Bon — доставляем любовь!</h1>
        </div>
        <img className={styles.image} src={Image} alt="" />
      </div>
      <Footer />
    </>
  );
};

export { About };
