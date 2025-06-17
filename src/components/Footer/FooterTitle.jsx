import styles from './Footer.module.scss';

function FooterTitle({ text1, text2 }) {
  return (
    <div className={styles.footer__text__block}>
      <p className={styles.footer__text}>{text1}</p>
      <p className={styles.footer__text}>{text2}</p>
    </div>
  );
}

export { FooterTitle };
