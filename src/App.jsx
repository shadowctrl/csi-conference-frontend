import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Head, Hero, Info, ChiefGuest, Souvenir } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Head />, <Hero />, <Info />]} />
        <Route
          path="chiefGuest"
          element={[<Head />, <ChiefGuest />, <Info />]}
        />
        <Route path="souvenir" element={[<Souvenir />]} />
      </Routes>
    </BrowserRouter>
    // <div className="">
    //   <div>
    //     {" "}
    //     <Header />
    //   </div>
    //   <div>
    //     {" "}
    //     <Hero />
    //   </div>

    //   <div>
    //     {" "}
    //     <Info />{" "}
    //   </div>
    //   {/* <RouterProvider router={router}/> */}
    // </div>
  );
}

export default App;
