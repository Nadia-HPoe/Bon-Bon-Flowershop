import './App.module.scss';
import { Header } from './components/Header';
import ReadyBouquet from './components/ReadyBouquet/ReadyBouquet';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <ReadyBouquet />
      </div>
    </>
  );
}

export default App;
