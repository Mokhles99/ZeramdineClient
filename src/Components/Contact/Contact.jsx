import React, { useEffect } from "react";
import "./Contact.css";

//
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidVideo } from "react-icons/bi";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
//
import image from "../../Assets/Contact Image.png";

import image2 from "../../Assets/Helo3.png"
//
import Aos from "aos";
import "aos/dist/aos.css";
import LeafletMap from './LeafletMap';


const mapContainerStyle = {
  width: '100%',
  height: '400px',
};



const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleContactClick = () => {
    window.location.href = 'https://www.facebook.com';
  };

  return (
    <div className="Contact container section" id="contact">
      <div className="secContainer flex">
      <div className="card">
          <h2 className="card-title">Où nous trouver ?</h2>
          <p className="card-subtitle">SZQ toujours à votre service</p>
          <div className="map-container">
            <LeafletMap />
          </div>
        </div>


        <div className="textDiv">
          <div data-aos="fade-down" className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText" style={{color:'rgb(201, 150, 26)' , fontFamily:"'Playfair Display', serif",fontSize:'2rem'}}>Contactez-nous</span>
              <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:'2rem'}}>
                Un moyen facile de nous contacter{" "}
                <span className="orangeDot">.</span>
              </h1>
              <p>
                Vous avez des difficultés à trouver la propriété de vos rêves
                pour votre domicile ? Vous avez besoin d'un guide pour acheter
                vos produits ? Contactez-nous simplement !
              </p>
            </div>
          </div>
          <div className="secContent grid" data-aos="fade-right">
            <div data-aos="fade-up" className="phone">
              <div className="info flex">
                <BiSolidPhoneCall className="icon" />
                <span>
                  <h4>Téléphone</h4>
                  <p>+216 56 924 849</p>
                </span>
              </div>
              <button>Appeler</button>
            </div>
            <div data-aos="fade-up" className="chat">
              <div className="info flex">
                <RiWhatsappFill className="icon" />
                <span>
                  <h4>WhatsApp</h4>
                  <p>+216 56 924 849</p>
                </span>
              </div>
              <button>Message</button>
            </div>
            <div data-aos="fade-up" className="videoCall">
              <div className="info flex">
                <FaFacebook className="icon" />
                <span>
                  <h4>Facebook</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button onClick={handleContactClick}>Contacter</button>
            </div>
            <div data-aos="fade-up" className="message">
              <div className="info flex">
                <AiFillInstagram className="icon" />
                <span>
                  <h4>Instagram</h4>
                  <p>24/7 Support</p>
                </span>
              </div>
              <button>Contacter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
