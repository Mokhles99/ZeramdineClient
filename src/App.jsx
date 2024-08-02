import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hello from "./Components/Hello/Hello";
import Sponsors from "./Components/Sponsors/Sponsors";
import Popular from "./Components/Popular/Popular";
import Listing from './Components/Listing/Listing';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Historique from './Components/Historique/Historique';
import HelloTwo from './Components/Hellotwo/Hello';
import Listingthree from './Components/Listingthree/Listingthree';
import ListingTwo from './Components/ListingTwo/Listing';
import ImageCarousel from './Components/ImagesCar/ImageCar';
import { CatalogProvider } from './Components/Listing/Catalogcontext';
import ImageSwiper from './Components/ImagesCar2/ImageSwiper';

function App() {
  return (
    <CatalogProvider>
      <Navbar/>
      <Hello/>
      <Sponsors/>
       <Listing/>
       <Listingthree/>
       <HelloTwo/>
       <ListingTwo/>
      <About/>
      <Contact/>
      {/* <ImageCarousel/> */}
      <ImageSwiper/>
      <Subscribe/> 
      <Footer/>
    </CatalogProvider>
  );
}

export default App;
