import { Header } from './components/Header';
import { Main } from './pages/Main';

import './App.module.scss';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
