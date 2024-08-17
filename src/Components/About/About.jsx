import React, { useState, useEffect } from "react";
import "./About.css";
import Accordion from "./Accordion";

import image from '../../Assets/szq.png'

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [active, setActive] = useState("Compétence Prouvée");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="About section container" id="about">
      <div className="secContainer flex">
        <div className="imgDiv">
          <img src={image} alt="Image À Propos" />
        </div>

        <div className="textDiv">
          <div  className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText" style={{color:" rgb(201, 150, 26)", fontFamily: "'Playfair Display', serif",fontSize:"1.7rem",marginBottom:"1rem"}}>NOS VALEURS</span>
              <h1 style={{fontFamily: "'Playfair Display', serif",fontSize:"2rem",marginBottom:"1rem"}}>
                Les valeurs que nous-vous apportons
                <span className="orangeDot"> .</span>
              </h1>
              <p>
              Nous sommes toujours prêts à vous aider en offrant les meilleurs services et produits de quincaillerie. Nous croyons qu'un bon équipement peut rendre vos projets de construction et de rénovation meilleurs .
              </p>
            </div>
          </div>
          <div  className="accordion grid">
          <Accordion
        title="Expertise en produits de quincaillerie"
        desc="Notre société excelle dans la fourniture d'une large gamme de produits de quincaillerie de haute qualité. Nous nous assurons que chaque produit répond aux normes les plus strictes pour garantir la satisfaction de nos clients."
        active={active}
        setActive={setActive}
      />

      <Accordion
        title="Connaissance approfondie du marché"
        desc="Notre équipe possède une connaissance approfondie du marché des produits de quincaillerie. Nous restons à l'affût des dernières tendances et innovations, offrant à nos clients des insights et conseils précieux."
        active={active}
        setActive={setActive}
      />

      <Accordion
        title="Solutions personnalisées pour les clients"
        desc="Reconnaissant les besoins uniques de chaque client, nous proposons des solutions sur mesure qui répondent aux exigences spécifiques des projets de quincaillerie, garantissant une expérience de service personnalisée et complète."
        active={active}
        setActive={setActive}
      />

      <Accordion
        title="Engagement envers les normes éthiques"
        desc="L'intégrité est primordiale dans nos opérations. Nous adhérons aux normes éthiques les plus élevées dans toutes nos transactions, en maintenant la transparence et l'honnêteté dans le marché des produits de quincaillerie."
        active={active}
        setActive={setActive}
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
