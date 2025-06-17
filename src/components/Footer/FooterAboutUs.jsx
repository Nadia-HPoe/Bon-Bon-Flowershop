import { FooterTitle } from './FooterTitle';
import { Footer } from './Footer';
import styles from './Footer.module.scss';

function FooterAboutUs() {
  return (
    <footer className={styles.footer}>
      <FooterTitle
        text1=" Мы уверены, что атмосфера уюта и искреннего отношения к каждому гостю — главный секрет
          успеха BonFlower."
        text2="Для нас важно, чтобы каждый клиент уходил с улыбкой и желанием вернуться вновь!"
      />
      <Footer />
    </footer>
  );
}

export { FooterAboutUs };
