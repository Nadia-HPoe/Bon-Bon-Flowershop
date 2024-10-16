import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <div>
        <iframe
          className={styles.frame}
          src="https://swdgts.ru/8e53d3d9a72a544f034226288d6f1ca8"
          style={{ position: 'relative' }}
        ></iframe>
      </div>
    </div>
  );
};
export default Reviews;
