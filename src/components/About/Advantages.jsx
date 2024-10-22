import styles from './about.module.scss';
import Icon1 from '../../assets/images/about/about-icon1.png';
import Icon2 from '../../assets/images/about/about-icon2.png';
import Icon3 from '../../assets/images/about/about-icon3.png';
import Icon4 from '../../assets/images/about/about-icon4.png';
import Icon5 from '../../assets/images/about/about-icon5.png';
const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <h1 className={styles.title}>Наши преимущества</h1>
      <div className={styles.list}>
        <div className={styles.list_item}>
          <img src={Icon1} alt="icon" className={styles.icon} />
          <p className={styles.paragraph}>Особый подход к каждому клиенту</p>
        </div>
        <div>
          <img src={Icon2} alt="icon" className={styles.icon} />
          <p className={styles.paragraph}>Опытные флористы высокой квалификации</p>
        </div>
        <div>
          <img src={Icon3} alt="icon" className={styles.icon} />
          <p className={styles.paragraph}>Быстрая доставка</p>
        </div>
        <div>
          <img src={Icon4} alt="icon" className={styles.icon} />
          <p className={styles.paragraph}>Накопительная бонусная система</p>
        </div>
        <div>
          <img src={Icon5} alt="icon" className={styles.icon} />
          <p className={styles.paragraph}>Большое разнообразие свежих цветов</p>
        </div>
      </div>
    </div>
  );
};

export { Advantages };
