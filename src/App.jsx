import "./App.css";
import Header from "./components/Header";
import Hero from "./components/hero";
import Info from "./components/Info";
import Aboutus from "./components/aboutus";

import { createRoutesFromElements, createBrowserRouter, Route, RouteProvider, NavLink } from "react-router-dom";
// import Popups from './components/Popups';
const router = cre


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
        <Aboutus />
      </div>
      <div>
        {" "}
        <Info />{" "}
      </div>
    </div>
  );
}

export default App;
