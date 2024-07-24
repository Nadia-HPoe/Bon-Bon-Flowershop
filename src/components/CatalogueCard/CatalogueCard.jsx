import styles from '../CatalogueCard/CatalogueCard.module.scss';


function CatalogueCard({ name, description, price, img }) {
    return (
        <div className={styles.card__pack}>
            <h3 className={styles.card__name}>{name}</h3>
            <p className={styles.card__description}>{description}</p>
            <img className={styles.card__image} src={img} alt="Bouquet" />
            <p className={styles.card__price}>{price} руб</p>
            <button className={styles.card__button}>Купить</button>
        </div>
    );
}
export default CatalogueCard;

