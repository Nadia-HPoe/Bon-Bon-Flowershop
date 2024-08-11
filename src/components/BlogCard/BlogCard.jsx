import styles from '../BlogCard/BlogCard.module.scss';
import Img from '../../assets/images/bouquets/bouquet-1.png';

function BlogCard({ title, description, index }) {
    const isImageFirst = index % 2 === 0;

    return (
        <div className={styles.card}>
            {isImageFirst ? (
                <>
                    <img className={styles.card__image} src={Img} />
                    <div className={styles.card__text}>
                        <h3 className={styles.card__title}>{title}</h3>
                        <p className={styles.card__description}>{description} </p>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.card__text}>
                        <h3 className={styles.card__title}>{title}</h3>
                        <p className={styles.card__description}>{description} </p>
                    </div>
                    <img className={styles.card__image} src={Img} />
                </>
            )}
        </div>
    );
}

export default BlogCard;
