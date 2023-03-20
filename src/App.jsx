import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Hero,
  Info,
  ChiefGuest,
  Souvenir,
  Error,
  Sponsors,
} from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={[<Header />, <Error />, <Info />]} />
        <Route path="/" element={[<Header />, <Hero />, <Info />]} />
        <Route
          path="chiefGuest"
          element={[<Header />, <ChiefGuest />, <Info />]}
        />
        <Route path="souvenir" element={[<Souvenir />]} />
        <Route path="sponsors" element={[<Header />, <Sponsors />, <Info />]} />
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
    //Hello
  );
}

export default App;
