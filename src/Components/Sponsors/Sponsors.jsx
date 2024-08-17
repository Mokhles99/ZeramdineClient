import React, { useEffect } from "react";
import "./Sponsors.css";

import logo1 from '../../Assets/marques/1.jpg';
import logo2 from '../../Assets/marques/2.png';
import logo3 from '../../Assets/marques/3.jpg';
import logo4 from '../../Assets/marques/4.png';
import logo5 from '../../Assets/marques/5.jpg';
import logo6 from '../../Assets/marques/6.jpg';
import logo7 from '../../Assets/marques/7.jpeg';
import logo8 from '../../Assets/marques/8.gif';
import logo9 from '../../Assets/marques/9.jpg';
import logo10 from '../../Assets/marques/10.png';
import logo11 from '../../Assets/marques/11.jpeg';
import logo12 from '../../Assets/marques/12.jpeg';
import logo13 from '../../Assets/marques/13.png';
import logo14 from '../../Assets/marques/14.png';
import logo15 from '../../Assets/marques/15.png';
import logo16 from '../../Assets/marques/16.jpg';
import logo17 from '../../Assets/marques/17.jpg';
import logo18 from '../../Assets/marques/18.jpg';
import logo19 from '../../Assets/marques/19.jpeg';
import logo20 from '../../Assets/marques/20.jpg';
import logo21 from '../../Assets/marques/21.jpeg';
import logo22 from '../../Assets/marques/22.png';
import logo23 from '../../Assets/marques/23.jpeg';
import logo24 from '../../Assets/marques/24.png';

import logo26 from '../../Assets/marques/26.png';
import logo27 from '../../Assets/marques/27.jpg';
import logo28 from '../../Assets/marques/28.png';
import logo29 from '../../Assets/marques/29.png';
import logo30 from '../../Assets/marques/30.jpeg';
import logo31 from '../../Assets/marques/31.png';

import logo38 from '../../Assets/marques/38.jpg';
import logo39 from '../../Assets/marques/39.png';
import logo40 from '../../Assets/marques/40.png';
import logo41 from '../../Assets/marques/41.png';
import logo42 from '../../Assets/marques/42.png';
import logo43 from '../../Assets/marques/43.jpg';
import logo44 from '../../Assets/marques/44.png';
import logo45 from '../../Assets/marques/45.png';
import logo46 from '../../Assets/marques/46.png';
import logo47 from '../../Assets/marques/47.png';
import logo48 from '../../Assets/marques/48.png';
import logo49 from '../../Assets/marques/49.png';
import logo50 from '../../Assets/marques/50.jpg';
import logo51 from '../../Assets/marques/51.png';
import logo52 from '../../Assets/marques/52.png';
import logo53 from '../../Assets/marques/53.png';
import logo54 from '../../Assets/marques/54.jpg';
import logo55 from '../../Assets/marques/55.png';
import logo56 from '../../Assets/marques/56.jpg';
import logo57 from '../../Assets/marques/57.png';
import logo58 from '../../Assets/marques/58.jpg';
import logo59 from '../../Assets/marques/59.jpg';
import logo60 from '../../Assets/marques/60.jpg';
import logo61 from '../../Assets/marques/61.jpg';
import logo62 from '../../Assets/marques/62.jpg';
import logo63 from '../../Assets/marques/63.jpg';
import logo64 from '../../Assets/marques/64.jpg';
import logo65 from '../../Assets/marques/65.jpg';
import logo66 from '../../Assets/marques/66.jpg';
import logo67 from '../../Assets/marques/67.jpg';
import logo69 from '../../Assets/marques/69.jpg';
import logo70 from '../../Assets/marques/70.jpg';
import logo71 from '../../Assets/marques/71.jpg';
import logo72 from '../../Assets/marques/72.jpg';
import logo73 from '../../Assets/marques/73.jpg';
import logo74 from '../../Assets/marques/74.jpg';
import logo75 from '../../Assets/marques/75.jpg';
import logo76 from '../../Assets/marques/76.jpg';
import logo77 from '../../Assets/marques/77.jpg';
import logo78 from '../../Assets/marques/78.jpg';
import logo79 from '../../Assets/marques/79.jpg';
import logo80 from '../../Assets/marques/80.jpg';
import logo81 from '../../Assets/marques/81.jpg';
import logo82 from '../../Assets/marques/82.jpg';
import logo83 from '../../Assets/marques/83.jpg';
import logo84 from '../../Assets/marques/84.jpg';
import logo85 from '../../Assets/marques/85.jpg';
import logo86 from '../../Assets/marques/86.jpg';
import logo87 from '../../Assets/marques/87.jpg';
import logo88 from '../../Assets/marques/88.jpg';
import logo89 from '../../Assets/marques/89.jpg';
import logo90 from '../../Assets/marques/90.jpg';
import logo91 from '../../Assets/marques/91.jpg';
import logo92 from '../../Assets/marques/92.jpg';
import logo93 from '../../Assets/marques/93.jpg';
import logo94 from '../../Assets/marques/94.jpg';
import logo95 from '../../Assets/marques/95.jpg';
import logo96 from '../../Assets/marques/96.jpg';
import logo97 from '../../Assets/marques/97.jpg';
import logo98 from '../../Assets/marques/98.jpg';
import logo99 from '../../Assets/marques/99.jpg';
import logo100 from '../../Assets/marques/100.jpg';
import logo101 from '../../Assets/marques/101.jpg';
import logo102 from '../../Assets/marques/102.jpg';
import logo103 from '../../Assets/marques/103.jpg';
import logo104 from '../../Assets/marques/104.jpg';

import Aos from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Sponsors" id="sponsor">
      <div className="sponsor-title" style={{ textAlign: 'center' }}>
        <h2 style={{ color:'#c9c2c2', fontSize: '1.1rem',marginBottom:'3rem',letterSpacing: '0.4em' , fontFamily: "'Playfair Display', serif",}}>
          Nos marques
        </h2>
      </div>
      <div className="secContainer flex">
        <div className="logo-slider">
          <span><img src={logo1} alt="Logo 1" /></span>
          <span><img src={logo2} alt="Logo 2" /></span>
          <span><img src={logo3} alt="Logo 3" /></span>
          <span><img src={logo4} alt="Logo 4" /></span>
          <span><img src={logo5} alt="Logo 5" /></span>
          <span><img src={logo6} alt="Logo 6" /></span>
          <span><img src={logo7} alt="Logo 7" /></span>
          <span><img src={logo8} alt="Logo 8" /></span>
          <span><img src={logo9} alt="Logo 9" /></span>
          <span><img src={logo10} alt="Logo 10" /></span>
          <span><img src={logo11} alt="Logo 11" /></span>
          <span><img src={logo12} alt="Logo 12" /></span>
          <span><img src={logo13} alt="Logo 13" /></span>
          <span><img src={logo14} alt="Logo 14" /></span>
          <span><img src={logo15} alt="Logo 15" /></span>
          <span><img src={logo16} alt="Logo 16" /></span>
          <span><img src={logo17} alt="Logo 17" /></span>
          <span><img src={logo18} alt="Logo 18" /></span>
          <span><img src={logo19} alt="Logo 19" /></span>
          <span><img src={logo20} alt="Logo 20" /></span>
          <span><img src={logo21} alt="Logo 21" /></span>
          <span><img src={logo22} alt="Logo 22" /></span>
          <span><img src={logo23} alt="Logo 23" /></span>
          <span><img src={logo24} alt="Logo 24" /></span>
        
          <span><img src={logo26} alt="Logo 26" /></span>
          <span><img src={logo27} alt="Logo 27" /></span>
         
          <span><img src={logo28} alt="Logo 28" /></span>
          <span><img src={logo29} alt="Logo 29" /></span>
          <span><img src={logo30} alt="Logo 30" /></span>
          <span><img src={logo31} alt="Logo 31" /></span>
       
   
          <span><img src={logo38} alt="Logo 38" /></span>
          <span><img src={logo39} alt="Logo 39" /></span>
          <span><img src={logo40} alt="Logo 40" /></span>
          <span><img src={logo41} alt="Logo 41" /></span>
          <span><img src={logo42} alt="Logo 42" /></span>
          <span><img src={logo43} alt="Logo 43" /></span>
          <span><img src={logo44} alt="Logo 44" /></span>
          <span><img src={logo45} alt="Logo 45" /></span>
          <span><img src={logo46} alt="Logo 46" /></span>
          <span><img src={logo47} alt="Logo 47" /></span>
          <span><img src={logo48} alt="Logo 48" /></span>
          <span><img src={logo49} alt="Logo 49" /></span>
          <span><img src={logo50} alt="Logo 50" /></span>
          <span><img src={logo51} alt="Logo 51" /></span>
          <span><img src={logo52} alt="Logo 52" /></span>
          <span><img src={logo53} alt="Logo 53" /></span>
          <span><img src={logo54} alt="Logo 54" /></span>
          <span><img src={logo55} alt="Logo 55" /></span>
          <span><img src={logo56} alt="Logo 56" /></span>
          <span><img src={logo57} alt="Logo 57" /></span>
          <span><img src={logo58} alt="Logo 58" /></span>
          <span><img src={logo59} alt="Logo 59" /></span>
          <span><img src={logo60} alt="Logo 60" /></span>
          <span><img src={logo61} alt="Logo 61" /></span>
          <span><img src={logo62} alt="Logo 62" /></span>
          <span><img src={logo63} alt="Logo 63" /></span>
          <span><img src={logo64} alt="Logo 64" /></span>
          <span><img src={logo65} alt="Logo 65" /></span>
          <span><img src={logo66} alt="Logo 66" /></span>
          <span><img src={logo67} alt="Logo 67" /></span>
          <span><img src={logo69} alt="Logo 69" /></span>
         
          <span><img src={logo70} alt="Logo 70" /></span>
          <span><img src={logo71} alt="Logo 71" /></span>
          <span><img src={logo72} alt="Logo 72" /></span>
          <span><img src={logo73} alt="Logo 73" /></span>
          <span><img src={logo74} alt="Logo 73" /></span>
          <span><img src={logo75} alt="Logo 75" /></span>
          <span><img src={logo76} alt="Logo 76" /></span>
          <span><img src={logo77} alt="Logo 77" /></span>
          <span><img src={logo78} alt="Logo 78" /></span>
          <span><img src={logo79} alt="Logo 79" /></span>
          <span><img src={logo80} alt="Logo 80" /></span>
          <span><img src={logo81} alt="Logo 81" /></span>
          <span><img src={logo82} alt="Logo 82" /></span>
          <span><img src={logo83} alt="Logo 83" /></span>
          <span><img src={logo84} alt="Logo 84" /></span>
          <span><img src={logo85} alt="Logo 85" /></span>
          <span><img src={logo86} alt="Logo 86" /></span>
          <span><img src={logo87} alt="Logo 87" /></span>
          <span><img src={logo88} alt="Logo 88" /></span>
          <span><img src={logo89} alt="Logo 89" /></span>
          <span><img src={logo90} alt="Logo 90" /></span>
          <span><img src={logo91} alt="Logo 91" /></span>
          <span><img src={logo92} alt="Logo 92" /></span>
          <span><img src={logo93} alt="Logo 93" /></span>
          <span><img src={logo94} alt="Logo 94" /></span>
          <span><img src={logo95} alt="Logo 95" /></span>
          <span><img src={logo96} alt="Logo 96" /></span>
          <span><img src={logo97} alt="Logo 97" /></span>
          <span><img src={logo98} alt="Logo 98" /></span>
          <span><img src={logo99} alt="Logo 99" /></span>
          <span><img src={logo100} alt="Logo 100" /></span>
          <span><img src={logo101} alt="Logo 101" /></span>
          <span><img src={logo102} alt="Logo 102" /></span>
          <span><img src={logo103} alt="Logo 103" /></span>
          <span><img src={logo104} alt="Logo 104" /></span>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
