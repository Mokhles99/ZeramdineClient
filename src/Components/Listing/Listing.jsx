import React, { useEffect, useContext,useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Listing.css";

import CatalogContext from "./Catalogcontext";
import { FaBed } from "react-icons/fa";
import { MdTableRestaurant } from "react-icons/md";
import { GiBedLamp } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { GiOlive } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiSpiralBottle } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { GiWoodPile } from "react-icons/gi"
import { GiWoodenPier } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa6";
import { FaSink } from "react-icons/fa";
import { FaToilet } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BiSolidBuildingHouse } from "react-icons/bi"
import { GiKitchenTap } from "react-icons/gi";
import { BiSolidBath } from "react-icons/bi";
import { getAllProducts } from "../../actions/product.actions";


import mascotImage from '../../Assets/szqcat2.png'


// import image11 from '../../Assets/sqz/peinture.jpg'
// import image22 from '../../Assets/sqz/electrique.jpg'
// import image33 from '../../Assets/sqz/porte.jpg'
// import image44 from '../../Assets/sqz/jardin.jpg'
// import image55 from '../../Assets/sqz/fixation.jpg'
// import image66 from '../../Assets/sqz/construction.jpg'
// import image77 from '../../Assets/sqz/polembrie.jpg'
// import image88 from '../../Assets/sqz/manuel.jpg'
// import image99 from '../../Assets/sqz/securite.jpg'


import image11 from '../../Assets/pc/acces.png'
import image22 from '../../Assets/pc/const.png'
import image33 from '../../Assets/pc/elect.png'
import image44 from '../../Assets/pc/fix.png'
import image55 from '../../Assets/pc/jard.png'
import image66 from '../../Assets/pc/manuel.png'
import image77 from '../../Assets/pc/menui.png'
import image88 from '../../Assets/pc/plomb.png'
import image99 from '../../Assets/pc/secur.png'


import Aos from "aos";
import "aos/dist/aos.css";


const propertiesOne = [
  {
    id: 1,
    image: image66,
    name: "OUTILS MANUEL",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "manuel"
  },
  {
    id: 2,
   

    image: image33,
    name: "OUTILS ELECTRIQUES",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "electriq"
  },
  {
    id: 3,
    image: image55,
    name: "OUTILS DE JARDIN",
    price: "24/24",
    desc: "Une entreprise",
    catalog: "jardin"
  },
  {
    id: 4,
    image: image44,
    name: "QUINCAILLERIE DE FIXATION",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "fixation"
  },


  {
    id: 5,

    image: image88,
    name: "PLOMBERIE",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "plomberie"
  },
  {
    id: 6,
    image: image77,
    name: "QUINCAILLERIE DE MENUISERIE",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "menuiserie"
  },

  {
    id: 7,
 

    image: image11,
    name: "PEINTURE & ACCESSOIRES",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "peinture"
  },
  {
    id: 8,
    image: image99,
    name: "ÉQUIPEMENT DE SECURITE",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "securite"
  },
  {
    id: 9,
    image: image22,
    name: "OUTILS DE CONSTRUCTION",
    price: "24/24",
    desc: "Une entreprise ",
    catalog: "construction"
  },
];


const Listing = () => {

  const dispatch = useDispatch();
  const { setCatalog, setCatalogName } = useContext(CatalogContext);
  const [selectedCatalog, setSelectedCatalog] = useState(null);
  const  mokles = useSelector(state => state.product.products);

  const [datamanuel, setDatamanuel] = useState([]);
  const [datajardin, setDatajardin] = useState([]);
  const [dataelect,setDataelect]=useState([]);

  const [datafixation, setDatafixation] = useState([]);
  const [dataplomberie, setDataplomberie] = useState([]);
  const [datamenui,setDatamenui]=useState([]);

  const [dataconstr, setDataconstr] = useState([]);
  const [datasecrt, setDatasect] = useState([]);
  const [datapeint,setDatapeint]=useState([]);



  useEffect(() => {
    dispatch(getAllProducts());
    // console.log('Produits chargés:', mokles);
  }, [dispatch]);


  useEffect(() => {
    const filteredManuel = mokles.filter(product => product.famille === 'Outils manuel');
    const filteredElect = mokles.filter(product => product.famille === 'Outils electrique');
    const filteredJardin = mokles.filter(product => product.famille == 'Outils de jardin')
    const filteredFixation = mokles.filter(product => product.famille === 'Quincaillerie de fixation');
    const filteredPlomberie = mokles.filter(product => product.famille === 'Plomberie');
    const filteredMenui = mokles.filter(product => product.famille == 'Quincaillerie de menuiserie')
    const filteredConstr = mokles.filter(product => product.famille === 'Outils de construction');
    const filteredSecrt = mokles.filter(product => product.famille === 'Équipement de securite');
    const filteredPeint = mokles.filter(product => product.famille == 'Peinture');

     setDatamanuel(filteredManuel);
     setDataelect(filteredElect);
     setDatajardin(filteredJardin);
     setDatafixation(filteredFixation);
     setDataplomberie(filteredPlomberie);
     setDatamenui(filteredMenui);
     setDataconstr(filteredConstr);
     setDatasect(filteredSecrt);
     setDatapeint(filteredPeint);

  }, [mokles]);


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleCatalogClick = (catalog, name) => {
    setCatalog(catalog);
    setCatalogName(name);
    setSelectedCatalog(catalog);
    setTimeout(() => {
      const element = document.getElementById('listing-three');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1000); // 1 second delay
  };

  return (
    <div className="Listing section" id="group">
      <div className="secContainer">
        <div className="secHeader">
         
          <h1   style={{
              color: '#C9961A', 
              fontSize: '2rem', 
              marginBottom: '2rem', 
              letterSpacing: '0.3em', 
              fontFamily: "'Playfair Display', serif", 
              fontWeight: '500', 
              textTransform: 'uppercase', 
            }}>EXPLOREZ NOS CATÉGORIES</h1>
          <h1  className="title" style={{letterSpacing: '0.2em',}}>
          Engagez-vous vers l'excellence avec SZQ 
            <span className="orangeDot"> .</span>
          </h1>
          <p  style={{fontFamily: "'Playfair Display', serif",marginBottom:'3rem'}}>
            Satisfaire nos clients , Dépassez vos frontières .
          </p>
          <div  className="btns flex">
        
              <button className="btnn min-width-221 font-18" style={{
                color: '#C9961A', // Text color
                backgroundColor: 'white', // Button background color
                border: '2px solid #C9961A',
                fontFamily: "'Playfair Display', serif",
                marginBottom:'3rem'// Border color
              }}>
                Choisissez vos désirs
              </button>


          </div>
        </div>

        <div className="secContent grid">
        {propertiesOne.map((property) => (
            <div
              key={property.id}
              className={`image-container ${selectedCatalog === property.catalog ? 'selected' : ''}`}
              
              onClick={() => handleCatalogClick(property.catalog, property.name)}
            >
              <img src={property.image} alt={property.name} className="property-image" />
            </div>
          ))}
        </div>
        <div className="mascotContainer">
          <img src={mascotImage} alt="Mascotte" className="mascotImage" />
        </div>
      </div>
   
    </div>
  );
};

export default Listing;
