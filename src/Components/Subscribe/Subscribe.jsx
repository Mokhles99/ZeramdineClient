import React, { useEffect } from "react";
import "./Subscribe.css";
import FormDialog from "./FormDialog";
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  const handleContactClick = () => {
    window.location.href = 'https://www.instagram.com/cogeb_immobiliere?igsh=amdkdGloNG11bWt4';
  };

  return (
    <div className="Subscribe section container">
      <div className="secContent">
        <h1 data-aos="fade-up">Client SZQ .</h1>
        <p data-aos="fade-up">
          Abonnez-vous et trouvez des offres de prix super attractives de notre part. Trouvez ce que vous désirez bientôt !
        </p>
        <button data-aos="fade-up" className="btn" 
       style={{
        color: '#C9961A', // Text color
        backgroundColor: '#cdc8c8', // Button background color
        border: '2px solid #C9961A'
      }}
        // onClick={handleContactClick}
        onClick={openModal}
        >
          S ' abonner
        </button>
      </div>
      <FormDialog open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Subscribe;
