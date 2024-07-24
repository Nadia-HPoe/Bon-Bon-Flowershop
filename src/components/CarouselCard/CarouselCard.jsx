import styles from './CarouselCard.module.scss';

export default function CarouselCard({ price, img }) {
  return (
    <div className={styles.card__wrapper}>
      <img className={styles.card__image} src={img} alt="Bouquet" />
      <p className={styles.card__price}>{price} руб</p>
      <button className={styles.card__button}>Купить</button>
    </div>
  );
}
