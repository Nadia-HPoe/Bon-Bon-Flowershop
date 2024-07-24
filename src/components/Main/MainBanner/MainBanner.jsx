import styles from "./MainBanner.module.scss";

const MainBanner = () => {
  return (
    <div className={styles.mainBanner_container}>
      <div className={styles.mainBanner_buttonContainer}>
        <button className={styles.mainBanner_button}>Заказать</button>
      </div>
    </div>
  );
};

export default MainBanner;
