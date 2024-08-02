import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../Assets/dossierproj/1.jpg';
import image2 from '../../Assets/dossierproj/2.jpg';
import image3 from '../../Assets/dossierproj/3.jpg';
import image4 from '../../Assets/dossierproj/4.jpg';
import image5 from '../../Assets/dossierproj/5.jpg'
import image6 from '../../Assets/dossierproj/6.jpg';
import image7 from '../../Assets/dossierproj/7.jpg';
import image8 from '../../Assets/dossierproj/8.jpg';
import image9 from '../../Assets/dossierproj/9.jpg';
import image10 from '../../Assets/dossierproj/10.jpg'
import image11 from '../../Assets/dossierproj/11.jpg';
import image12 from '../../Assets/dossierproj/12.jpg'


const images = [image1, image2, image3, image4,image5,image6,image7,image8,image9,image10,image11,image12];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: '80px', 
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '100%' , paddingTop:'5rem' ,paddingBottom:'10rem'}}>

<div className="carousel-titles" style={{ textAlign: 'center', marginBottom: '5rem', marginTop:"5rem" }}>
        <h2 style={{ fontSize: '1.5rem', color: 'rgb(201, 150, 26)', fontWeight: 'bold' ,paddingBottom:'2rem'}}>EXPLOREZ NOS PROJETS</h2>
        <p style={{ fontSize: '1.5rem', color: 'gray' }}>Jetez un œil à nos projets récents</p>
      </div>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} style={{ padding: '0 15px' }}> {/* Ajustez le padding ici pour plus d'espacement */}
            <img src={img} alt={`Slide ${idx}`} style={{
              width: '90%', 
              height: '520px', 
              borderRadius: '30px', // Utilisez une valeur en px pour un meilleur contrôle
              boxSizing: 'border-box'
            }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
