import React, { useState, useEffect } from "react";
import "./Hello.css";

import ImageHero3 from '../../Assets/choisir2.png';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import "aos/dist/aos.css";





const HelloTwo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '600px',
    bgcolor: '#122023',
    color: 'rgb(201, 150, 26)',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };



  return (
    <div className="HelloTwo">
      <div className="secContainerTwo containerHRR flex">
        <div className="textDiv">
          <h1 > <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem" }}>Pourquoi nous choisir ?</span></h1>
          <span className="design"></span>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" , textAlign:"justify" }}>
            Depuis <span style={{ color: 'rgb(201, 150, 26)', fontWeight: 'bold' }}>1986</span>, nous nous engageons à fournir à notre communauté les outils et les
            fournitures dont elle a besoin pour réaliser ses projets, grands ou petits. Notre
            histoire commence il y a plus de trois décennies, lorsque <span style={{ color: 'rgb(201, 150, 26)', fontWeight: 'bold' }}>LHAJ KHEMAÏES</span> a ouvert
            les portes de notre quincaillerie avec une vision simple : offrir des produits de qualité
            et un service exceptionnel à nos clients Au fil des ans, nous avons grandi et évolué, mais notre engagement envers la
            satisfaction de nos clients est resté constant. Que vous soyez un professionnel
            chevronné ou un bricoleur passionné, notre équipe expérimentée est là pour vous
            guider, vous conseiller et vous fournir les solutions dont vous avez besoin pour
            mener à bien vos projets ... <span style={{ color: "rgb(201, 150, 26)", textDecoration: "underline", cursor: 'pointer' }} onClick={handleOpenModal} >VOIR PLUS</span>
          </p>

          <div className="statistics-bar-container">
            <div className="statistics-bar-title">Découvrez notre histoire . </div>
          
            <div className="statistics-bar-stats">
              <div className="statistics-bar-item">
                <div className="statistics-bar-value">30 ANS +</div>
                <div className="statistics-bar-label">Expérience</div>
              </div>
              <div className="statistics-bar-item">
                <div className="statistics-bar-value">1986</div>
                <div className="statistics-bar-label">Depuis</div>
              </div>
              <div className="statistics-bar-item">
                <div className="statistics-bar-value">2000 +</div>
                <div className="statistics-bar-label">Clients</div>
              </div>
              <div className="statistics-bar-item">
                <div className="statistics-bar-value">3500 +</div>
                <div className="statistics-bar-label">Produits</div>
              </div>
              <div className="statistics-bar-item">
                <div className="statistics-bar-value">200 +</div>
                <div className="statistics-bar-label">Projets</div>
              </div>
            </div>
          </div>
        </div>
        <div className="imgDiv">
          <img src={ImageHero3} alt="Image Accueil" />
        </div>

        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box sx={modalStyle}>
            <h2 style={{marginBottom:'4px', fontFamly: 'Satisfy' , fontSize:'1.1rem'}} >SOCIÉTE ZÉRAMDINE DE QUINCAILLERIE</h2>
            <p style={{ color: 'silver', fontSize:"0.8rem" }}>
              Chez SOCIÉTE ZÉRAMDINE DE QUINCAILLERIE, nous croyons en la valeur du
              service personnalisé et de la proximité avec nos clients. En tant que membre de cette
              communauté depuis plus de trois décennies, nous sommes fiers de soutenir les
              projets locaux et de contribuer à la croissance et au bien-être de notre région.
              Nous sommes impatients de vous accueillir dans notre quincaillerie et de vous aider à
              réaliser vos projets, quels qu'ils soient. Merci de votre confiance et de votre fidélité
              depuis toutes ces années.
              <br />
              <br />
              <span style={{ fontFamily: 'Satisfy' }} className="societe" >L'équipe de  <span className="societe" style={{ color: "rgb(201, 150, 26)",  fontFamily: 'Edu TAS Beginner',textDecoration: "underline" }} >SOCIÉTE ZÉRAMDINE DE QUINCAILLERIE</span></span>
            </p>
            {/* <Button onClick={handleCloseModal} variant="contained" sx={{ mt: 2, backgroundColor: 'rgb(201, 150, 26)', color: '#122023', '&:hover': { backgroundColor: '#ffc107', color: '#122023' } }}>
              Fermer
            </Button> */}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default HelloTwo;
