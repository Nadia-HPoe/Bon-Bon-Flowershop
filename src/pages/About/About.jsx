import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Team } from '../../components/About/Team';
import { Advantages } from '../../components/About/Advantages';
import { Creation } from '../../components/About/Creation';
import { FooterAboutUs } from '../../components/Footer/FooterAboutUs';

const About = () => {
  return (
    <>
      <Header />
      <Team />
      {/* <Advantages />
      <Creation /> */}
      <FooterAboutUs />
    </>
  );
};

export { About };
