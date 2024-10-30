import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.container}>
        <iframe
          className={styles.frame}
          src="https://swdgts.ru/8e53d3d9a72a544f034226288d6f1ca8"
        ></iframe>
        {/* <script src="https://res.smartwidgets.ru/app.js" defer></script>
        <div className="sw-app" data-app="8e53d3d9a72a544f034226288d6f1ca8"></div> */}
      </div>
    </div>
  );
};
export default Reviews;
