import "./App.css";
import Header from "./components/Header";
import Hero from "./components/hero";
import Info from "./components/Info";
// import Popups from './components/Popups';

function App() {
  return (
    <div className="">
      <div>
        {" "}
        <Header />
      </div>
      <div>
        {" "}
        <Hero />
      </div>
      <div>
        {" "}
        <Info />{" "}
      </div>
    </div>
  );
}

export default App;
