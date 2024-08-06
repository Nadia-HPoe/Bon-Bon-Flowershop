import styles from '../CatalogueCard/CatalogueCard.module.scss';
import Img from '../../assets/images/bouquets/bouquet-1.png'

function CatalogueCard({ title, description, price }) {
    return (
        <div className={styles.card__pack}>
            <img className={styles.card__image} src={Img} />

            <div className={styles.card__text}>
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{description} </p>
            </div>

            <div className={styles.card__value}>
                <p className={styles.card__price}>{price} руб</p>
            </div>

            <div className={styles.card__btn}>
                <button className={styles.card__button}>Купить</button>
            </div>
        </div>
    );
}
export default CatalogueCard;

