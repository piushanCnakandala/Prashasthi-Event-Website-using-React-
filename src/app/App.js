import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../pages/homePage";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import Weddings from "../pages/weddings";
import GalleryPage from "../pages/gallery";
import CorporateEventPage from "../pages/corporateEventPage";
import EntertainmentEventPage from "../pages/EntertainmentPage";
import EngagementsEventPage from "../pages/EngagementsPage";
import UpComingEvents from "../pages/upcomingEvents";
import ImgOfPoruCeremony from "../pages/imgOfPoruCeremonyPage";
import ImgOfWeddinge from "../pages/imgOfWeddingPage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/weddingsPage" element={<Weddings/>}/>
          <Route path="/galleryPage" element={<GalleryPage/>}/>
          <Route path="/corporatePage" element={<CorporateEventPage/>}/>
          <Route path="/entertainmentPage" element={<EntertainmentEventPage/>}/>
          <Route path="/engagementsPage" element={<EngagementsEventPage/>}/>
          <Route path="/upcomingEvents" element={<UpComingEvents/>}/>
          <Route path="/imgOfPoruCeremony" element={<ImgOfPoruCeremony/>}/>
          <Route path="/imgOfWedding" element={<ImgOfWeddinge/>}/>
      </Routes>
  );
}

export default App;
