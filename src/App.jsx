import "./App.css";
/*              COMPONENTS              */
import Header from "./components/Header";
import Hero from "./components/hero";
// import ChiefGuest from "./components/chiefGuest";
// import chief from "./components/chief";
import Info from "./components/Info";
// import Aboutus from "./components/aboutus";
import ChiefGuest from "./components/chiefGuest";

/*               LAYOUTS               */
import RootLayout from "./Layouts/RootLayout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Popups from './components/Popups';
// const router = cre
// const router = createBrowserRouter (
//                createRoutesFromElements(

//                 <Route path='/' element={<RootLayout/>}>

//                     <Route index element={<Hero/>} />
//                     <Route path='chiefGuest' element={<ChiefGuest/>} />
//                 </Route>

//                )
//               )

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Header />, <Hero />, <Info />]} />
        <Route
          path="chiefGuest"
          element={[<Header />, <ChiefGuest />, <Info />]}
        ></Route>
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
