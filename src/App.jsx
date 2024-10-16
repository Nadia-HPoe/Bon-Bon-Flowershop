import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Header } from './components/Header/Header';
import { Main } from './pages/Main';
// import { FooterMain } from './components/Footer/FooterMain';
import './App.module.scss';
import styles from './App.module.scss';
import Catalogue from './pages/Catalogue/Catalogue';
import { About } from './pages/About/About';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <>
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
