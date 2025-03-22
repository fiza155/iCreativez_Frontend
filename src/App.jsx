import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/heroSection/Hero";
import ParawithCards from "./components/paraAndCards/ParawithCards";
import OurServices from "./components/cards/OurServices";
import Marquee from "./components/marquee/Marqueelogo";
import Footer from "./components/footer/Footer";
import Achievements from "./components/Acheivments/Acheivments";
import SuccessAwards from "./components/SuccessAwards/SucessAwards";
import ImagesSection from "./components/ImagesSection/ImageSection";
import Career from "./components/career/Career";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      {/* <ParawithCards /> */}
      <OurServices />
      <Achievements />
      <ImagesSection />
      <Marquee />
      {/* <Career /> */}
      {/* <SuccessAwards /> */}
      <Footer />
    </>
  );
}

export default App;
