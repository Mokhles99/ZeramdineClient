import React, { useEffect } from "react";
import "./Footer.css";

import { SiTreehouse } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css";
import image from "../../Assets/Plan2.png";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" className="logoDiv">
          <div className="footerLogo">
            {/* <SiTreehouse className="icon" />
            <span>COGEB</span> */}
            <img src={image} className="logonav"/>
          </div>
          <p>Notre vision est de faire de cet endroit le meilleur lieu de vie pour les gens .</p>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <RiWhatsappFill className="icon" />
            
          </div>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Informations</span>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">Explorer</a>
          </li>
          <li>
            <a href="">Contacter</a>
          </li>
          <li>
            <a href="">Groupe</a>
          </li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Liens utiles</span>
          <li>
            <a href="">Devis</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Lieux & Conditions</a>
          </li>
          <li>
            <a href="">Confidentialité</a>
          </li>
        </div>

        <div data-aos="fade-up" className="footerLinks">
          <span className="linkTitle">Détails de contact</span>
          <span className="phone">+216 56 924 849</span>
          <span className="email">contact@szq.com.tn</span>
          <span className="website">www.szq.com.tn</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
