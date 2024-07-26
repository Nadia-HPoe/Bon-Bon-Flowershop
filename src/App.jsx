
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main";
import { FooterMain } from "./components/Footer/FooterMain";

import "./App.module.scss";
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Main />
        <FooterMain />
      </div>
    </>
  );
}

export default App;
