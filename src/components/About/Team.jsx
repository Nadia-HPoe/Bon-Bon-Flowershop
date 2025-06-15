import styles from './about.module.scss';
import Image from '../../assets/images/about/about-team.avif';
import Logo from '../../assets/logo/logo.png';
const Team = () => {
  return (
    <div className={styles.team}>
      <h1 className={styles.title}>Наша команда</h1>
      <div className={styles.team_container}>
        <img src={Image} alt="team" className={styles.team_image} />
        <div className={styles.team_info}>
          <h2 className={styles.team_subtitle}>BonFlower - студия современной флористики</h2>
          <p className={styles.paragraph}>
            BonFlower — это современный цветочный магазин, где каждый букет создаётся с душой и
            вниманием к деталям. Мы верим, что цветы способны не только украсить любое событие, но и
            передать самые искренние чувства, будь то радость, забота или благодарность. В нашем
            ассортименте вы найдёте свежие сезонные цветы, оригинальные композиции и стильные
            подарочные наборы — всё, чтобы сделать ваш день особенным.
          </p>
          <p className={styles.paragraph}>
            Мы заботимся о качестве: работаем только с проверенными поставщиками и тщательно следим
            за свежестью каждой композиции. Для вашего удобства мы предлагаем быструю доставку по
            городу, оформляем букеты на заказ и всегда готовы помочь с выбором идеального варианта
            для любого случая.
          </p>
          <p className={styles.paragraph}>
            Команда BonFlower — это профессиональные флористы и внимательные менеджеры, объединённые
            любовью к своему делу. Каждый из нас не просто собирает букеты, а вкладывает в работу
            частичку вдохновения и заботы о клиенте. Мы постоянно учимся новым техникам, следим за
            мировыми трендами флористики и стремимся удивлять вас свежими идеями.
          </p>
          <img src={Logo} alt="logotype" className={styles.team_logo} />
        </div>
      </div>
    </div>
  );
};

export { Team };
