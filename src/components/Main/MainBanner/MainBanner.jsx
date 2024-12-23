import styles from './MainBanner.module.scss';
import logo from './../../../assets/logo/main-page-logo.png';

const MainBanner = () => {
  return (
    <div className={styles.mainBanner_container}>
      <div className={styles.mainBanner_container_logo}>
        <img className={styles.mainBanner_logo} src={logo} alt="logo" />
        <h1 className={styles.mainBanner_text}>
          Собираем букеты <br />с любовью
        </h1>
        <button className={styles.mainBanner_button}>Заказать</button>
      </div>
    </div>
  );
};

export default MainBanner;
