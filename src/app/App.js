import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../pages/homePage";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
  );
}

export default App;
