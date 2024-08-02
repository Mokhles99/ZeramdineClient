import React, { useState, useEffect } from "react";
import "./Hello.css";
import { HiLocationMarker } from "react-icons/hi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "../../Assets/Hello Image.png";
import Image2 from '../../Assets/tayma11.png';
import Image3 from '../../Assets/Helo1.png';
import ImageHero from '../../Assets/HELLO2.png';
import ImageHero2 from '../../Assets/per.png';
import ImageHero3 from '../../Assets/choisir2.png';
import Image4 from '../../Assets/tayma33.png';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Aos from "aos";
import "aos/dist/aos.css";

const styles = {
  container: {
    backgroundColor: '#122023',
    height: '200px',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    position: 'relative',
  },
  mainTitle: {
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontFamily: "'Playfair Display', serif",
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '3px solid rgb(201, 150, 26)', // gold color
    paddingTop: '20px',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: "'Playfair Display', serif",
  },
  statValue: {
    fontSize: '20px',
    fontWeight: 'bold',
    // fontFamily: "'Playfair Display', serif",
   
  },
  statLabel: {
    fontSize: '19px',
    marginTop: '5px',
    // fontFamily: "'Playfair Display', serif",
  },
};

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

  const [text] = useTypewriter({
    words: ["Votre projet, notre passion – ensemble, construisons du grandiose.", "Qualité, variété et conseils d'experts pour chaque étape de votre réalisation", "Des outils fiables pour des créations sans limite – la quincaillerie de toutes vos ambitions."],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 1,
    delaySpeed: 2000,
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="HelloTwo">
      <div className="secContainerTwo containerHRR flex">
        <div className="textDiv">
          <h1 data-aos="fade-up"> <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem" }}>Pourquoi nous choisir ?</span></h1>
          <span data-aos="fade-up" className="design"></span>
          <p data-aos="fade-up" style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.8rem" }}>
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

          <div data-aos="fade-up" className="statisticsBar" style={styles.container}>
            <div style={styles.mainTitle}>Découvrez notre histoire . </div>
          
            <div style={styles.statsContainer}>
              <div style={styles.statItem}>
                <div style={styles.statValue}>30 ANS +</div>
                <div style={styles.statLabel}>Expérience</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>1986</div>
                <div style={styles.statLabel}>Depuis</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>2000 +</div>
                <div style={styles.statLabel}>Clients</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>3500 +</div>
                <div style={styles.statLabel}>Produit</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statValue}>200 +</div>
                <div style={styles.statLabel}>Projet</div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="imgDiv">
          <img src={ImageHero3} alt="Image Accueil" />
        </div>

        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box sx={modalStyle}>
            <h2 style={{marginBottom:'20px', fontFamily: 'Satisfy'}} >SOCIÉTE ZÉRAMDINE DE QUINCAILLERIE</h2>
            <p style={{ color: 'silver' }}>
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
