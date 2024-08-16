import React, { useState } from "react";
import "./Navbar.css";

 //
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import image3 from "../../Assets/Plan de travail 12.png";
import image2 from '../../Assets/Plan de travail 1.png'
import image1 from '../../Assets/PLAN122.png'

import CartIcon from "../Card/Cardicon";


const Navbar = () => {
  //function to show navbar
  const [menu, setMenu] = useState("menu");
  const shownavbar = () => {
    setMenu("showNavbar menu");
  };

  //function to remove navbar
  const removenavbar = () => {
    setMenu("menu");
  };

  //function to add a background to the navbar on scroll
  const [transparent, setTransparent] = useState("Navbar");
  const addBG = () => {
    if (window.scrollY >= 10) {
      setTransparent("Navbar addBackground");
     
    } else {
      setTransparent("Navbar");
    }
  };
  window.addEventListener("scroll", addBG);

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGroup = () => {
    const groupElement = document.getElementById("group");
    if (groupElement) {
      groupElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const aboutUsElement = document.getElementById("about");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHero = () => {
    const aboutUsElement = document.getElementById("hero");
    if (aboutUsElement) {
      aboutUsElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={transparent}>
      <div className="logoDiv">
        {/* <SiTreehouse className="icon" /> */}
        <img src={image1} className="logonav"/>
       
      </div>

      <div className={menu}>
        <ul>
          <li className="navList" onClick={scrollToHero}>Accueil</li>
          {/* <li className="navList">Services</li> */}
          <li className="navList" onClick={scrollToGroup}>Catégories</li>
          <li className="navList" onClick={scrollToAboutUs}>À Propos</li>
        </ul>
        {/* icon close navbar on small devices */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removenavbar} />
      </div>
     
     
       
       <CartIcon/>
  
      <button className="btnn" style={{
                color: '#C9961A', // Text color
                background:"rgb(205 198 198 / 36%)",
                // Button background color
                border: '2px solid #C9961A' ,
                fontFamily: "'Playfair Display', serif",// Border color
              }}
              onClick={scrollToContact}
              >
                Contact
              </button>


      {/* icon open/show navbar on small devices */}
      <PiDotsNineBold className="icon menuIcon" onClick={shownavbar} />
    </div>
    ///commit correctif
  );
};

export default Navbar;
