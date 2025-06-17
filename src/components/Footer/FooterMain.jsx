import styles from './Footer.module.scss';
import { FooterTitle } from './FooterTitle';
import { Footer } from './Footer';

function FooterMain() {
  return (
    <footer className={styles.footer}>
      <FooterTitle
        text1="Мы бережно собираем ваши эмоции в букеты и композиции, все наши работы собраны с душой и
          любовью!"
        text2="Говорят, что нет вечного двигателя. А он есть. И имя ему - любовь!"
      />
      <Footer />
    </footer>
  );
}

export { FooterMain };
