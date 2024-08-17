import React, { useState, useEffect } from "react";
import "./HelloSection.css";
import { HiLocationMarker } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ImageHero3 from '../../Assets/szq1.png';
import Aos from "aos";
import "aos/dist/aos.css";

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 1000 / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 100);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{Math.round(count)}</span>;
};

const HeroSection = () => {
  const [text] = useTypewriter({
    // words: [
    //   "Votre projet, notre passion – ensemble, construisons du grandiose.",
    //   "Qualité, variété et conseils d'experts pour chaque étape de votre réalisation",
    //   "Des outils fiables pour des créations sans limite – la quincaillerie de toutes vos ambitions."
    // ],
    words: [
      "Votre projet, notre passion – construisons ensemble.",
      "Qualité, variété et conseils d'experts pour chaque étape.",
      "Des outils fiables pour des créations sans limites."
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 1,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const timer = setTimeout(() => {
      const sponsorsElement = document.getElementById("group"); 
      if (sponsorsElement) {
        sponsorsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section" id="hero">
      <div className="hero-container px-3">
        <div className="hero-text">
          <h1 className="curr">
            {/* Mokles commit  */}
            {/* <span style={{ fontFamily: "'Playfair Display', serif" }}>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="orange" />   */}
               SOCIÉTÉ ZÉRAMDINE DE QUINCAILLERIE : Façonnez votre espace de rêve, où innovation et élégance se rencontrent pour transcender l'ordinaire .
          </h1>
          <span className="design"></span>
          {/* <p data-aos="fade-up">
            SOCIÉTÉ ZÉRAMDINE DE QUINCAILLERIE : façonnez votre espace de rêve, où innovation et élégance se rencontrent pour transcender l'ordinaire.
          </p> */}
          <div className="hero-numbers flex">
            <div className="number-item">
              <span>
                <AnimatedCounter end={110} duration={0} /> <blockquote>+</blockquote>
              </span>
              <small >Marques</small>
            </div>
            <div className="number-item">
            <span >
                <AnimatedCounter end={2} duration={0} /> <blockquote>K+</blockquote>
              </span>
              <small>Clients Heureux</small>
            </div>
            <div className="number-item">
            <span >
                <AnimatedCounter end={1986} duration={0} /> <blockquote>+</blockquote>
              </span>
              <small>Notre histoire</small>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={ImageHero3} alt="Image Accueil"  className="hello-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
