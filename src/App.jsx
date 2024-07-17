import "./App.module.scss";
import { Header } from "./components/Header";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <>
      <div>
        <Header />
				<Carousel/>
      </div>
    </>
  );
}

export default App;
