import "./App.module.scss";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { FooterMain } from "./components/Footer/FooterMain";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <FooterMain />
      </div>
    </>
  );
}

export default App;
