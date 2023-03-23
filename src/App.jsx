import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  Head,
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
        <Route path="*" element={[<Head />, <Error />, <Info />]} />
        <Route path="/" element={[<Head />, <Hero />, <Info />]} />
        <Route
          path="chiefGuest"
          element={[<Head />, <ChiefGuest />, <Info />]}
        />
        <Route path="souvenir" element={[<Souvenir />]} />
        <Route path="sponsors" element={[<Head />, <Sponsors />, <Info />]} />
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
