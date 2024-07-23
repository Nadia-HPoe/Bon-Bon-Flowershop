import bouquetImage from '../../assets/images/bouquets/bouquet-1.png';

import styles from './CarouselCard.module.scss';

export default function CarouselCard() {
  return (
    <div className={styles.card__wrapper}>
      <img className={styles.card__image} src={bouquetImage} alt="Bouquet" />
      <p className={styles.card__price}>10 000 руб</p>
      <button className={styles.card__button}>Купить</button>
    </div>
  );
}
