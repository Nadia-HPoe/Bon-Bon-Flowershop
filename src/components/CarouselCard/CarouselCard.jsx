import styles from './CarouselCard.module.scss';

export default function CarouselCard({ price, img, title }) {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={img} alt="Bouquet" />
      <h4 className={styles.card__title}>{title}</h4>
      <button className={styles.card__button}>{price} ₽</button>
    </div>
  );
}
