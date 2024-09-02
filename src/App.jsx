import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header className={"sticky object-top top-0 z-50"}/>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/aboutUs" index element={<AboutUs/>}/>
          <Route path="/contactUs" index element={<ContactUs/>}/>
          <Route>
              {/* <Route path="auth" index element={}> */}
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
