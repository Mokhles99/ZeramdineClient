// import React, { useEffect, useContext, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./Listingthree.css";
// import CatalogContext from "../Listing/Catalogcontext";
// import { getAllProducts } from "../../actions/product.actions";
// import { addToCarttwo, getCarttwo } from '../../actions/carttwo.actions';
// import { MdOutlineShoppingCart, MdOutlineVisibility } from "react-icons/md";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import { FaSearch } from "react-icons/fa";
// import Pagination from '@mui/material/Pagination'; // Importer le composant Pagination de Material-UI

// const manuel = ["Tournevis", "Marteaux", "Pinces", "Clés", "Scies", "Mesures"];
// const electriq = ["Interrupteurs", "Prises de courant", "Câbles électriques", "Lampes et luminaires", "Disjoncteur", "Boîtes de jonction"];
// const jardin = ["Tondeuses à gazon", "Taille-haies", "Brouettes", "Arrosoirs"];
// const fixation = ["Vis", "Clous", "Boulons", "Écrous", "Crochets", "Chevilles", "Rivet", "Goujons d'ancrage"];
// const menuiserie = ["Poignées", "Serrures", "Charnières", "Verrous"];
// const plomberie = ["Robinets", "Raccords", "Collecteurs", "Tuyaux", "Éviers", "Toilettes", "Douches", "Siphons"];
// const peinture = ["Peinture et décoration", "Pinceaux et Rouleaux", "Rubans de masquage", "Bâches de protection", "Diluants et solvants", "Mastics et enduits"];
// const securite = ["Casques", "Lunettes", "Gants", "Vêtements"];
// const construction = ["Plâtre", "Ciment", "Étanchéité"];

// const catalogData = {
//   manuel,
//   electriq,
//   jardin,
//   fixation,
//   menuiserie,
//   plomberie,
//   peinture,
//   securite,
//   construction
// };

// const getModalStyle = () => {
//   const baseStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     bgcolor: '#122023',
//     color: '#FFFFFF',
//     borderRadius: '10px',
//     boxShadow: 24,
//     p: 4,
//     textAlign: 'center',
//   };

//   const titleStyle = {
//     color: 'gold',
//     fontWeight: 'bold',
//   };
//   const textStyle = {
//     color: 'white',
//     textAlign: 'justify',
//   };

//   const width = window.innerWidth;

//   if (width < 580) {
//     return {
//       ...baseStyle,
//       width: '80%',
//       flexDirection: 'column', // Stack image and text vertically
//       titleStyle: { ...titleStyle, fontSize: '0.7rem' },
//       textStyle: { ...textStyle, fontSize: '0.8rem' },
//     };
//   }
//   //  else if (width >= 426) {
//   //   return {
//   //     ...baseStyle,
//   //     width: '85%',
//   //     flexDirection: 'column', // Stack image and text vertically
//   //     titleStyle: { ...titleStyle, fontSize: '1.1rem' },
//   //   };
//   // }
//    else {
//     return {
//       ...baseStyle,
//       width: '70%',
//       flexDirection: 'row', // Place image and text side by side
//       titleStyle: { ...titleStyle, fontSize: '0.9rem' },
//     };
//   }
// };

// const Listingthree = () => {
//   const dispatch = useDispatch();
//   const { catalog, catalogName } = useContext(CatalogContext);
//   const mokles = useSelector(state => state.product.products);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedType, setSelectedType] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [open, setOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const cart = useSelector(state => state.carttwo.carttwo);
//   const productsPerPage = 12;

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   useEffect(() => {
//     if (catalog && mokles) {
//       const filtered = mokles.filter(product => catalogData[catalog].includes(product.type));
//       setFilteredProducts(filtered);
//     }
//   }, [catalog, mokles]);

//   const handleTypeClick = (type) => {
//     setSelectedType(type);
//     const filtered = mokles.filter(product => product.type === type);
//     setFilteredProducts(filtered);
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedProduct(null);
//   };

//   const handleSearchClick = () => {
//     setSearchOpen(!searchOpen);
//     setSearchQuery("");
//     if (!searchOpen) {
//       setFilteredProducts(mokles);
//       setSuggestions([]);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     if (e.target.value.length > 0) {
//       const filteredSuggestions = mokles.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleAddToCart = (productId) => {
//     const cartId = localStorage.getItem('cartId');
//     if (!cartId) {
//       console.error("Cart ID is not found in localStorage");
//       return;
//     }
//     dispatch(addToCarttwo(cartId, productId, 1));
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion.name);
//     setFilteredProducts([suggestion]);
//     setSuggestions([]);
//   };

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const truncateDescription = (description , product) => {
//     const maxLength = 120;
//     if (description.length > maxLength) {
//       return (
//         <>
//           {description.slice(0, maxLength)}
//           <span style={{ color: 'rgb(201, 150, 26)' , cursor:"pointer" }}  onClick={() => handleProductClick(product)}>..... Voir plus</span>
//         </>
//       );
//     }
//     return description;
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const modalStyle = getModalStyle();
//   const { titleStyle, flexDirection ,textStyle } = modalStyle;

//   return (
//     <div className="Listingthree containerNew" id="listing-three">
//       <div className="secContainerthree">
//         <div className="secHeader">
//           <h1 style={{
//             color: '#C9961A', 
//             fontSize: '2rem', 
//             marginBottom: '2rem', 
//             letterSpacing: '0.2em', 
//             fontFamily: "'Playfair Display', serif", 
//             fontWeight: '500', 
//             textTransform: 'uppercase', 
//           }}>
//             Nos Produits
//           </h1>
//           <h1 className="title" style={{letterSpacing: '0.1em',}}>
//             Gamme de produits exclusifs
//             <span className="orangeDot"> .</span>
//           </h1>
//           <p style={{marginBottom:'4rem', marginTop:'2rem'}}>
//             Découvrez nos produits exclusifs qui dépassent les frontières de l'excellence pour satisfaire vos exigences.
//           </p>

//           {catalogName && (
//          <div class="catalog-container">
//          <span>{catalogName}</span>
//          <span class="catalog-icon">⬇️</span>
//        </div>
//           )}
//           <div className="btns flex">
//             {catalogData[catalog].map((name, index) => (
//               <button
//                 key={index}
//                 className="btnn3"
//                 onClick={() => handleTypeClick(name)}
//                 style={{
//                   color: selectedType === name ? 'white' : '#C9961A', 
//                   backgroundColor: selectedType === name ? '#C9961A' : 'white', 
//                   border: '2px solid #C9961A',
//                   fontFamily: "'Playfair Display', serif",
//                   marginBottom: '0px', 
//                   padding: "10px 5px",
//                   minWidth : "104px",
//                   cursor: 'pointer', 
//                 }}
//               >
//                 {name}
//               </button>
//             ))}
//           </div>
//           <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
//             {searchOpen && (
//               <div style={{ position: 'absolute', right: '40px', zIndex: 1000 }}>
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                   placeholder="Chercher par nom"
//                   style={{ padding: '10px', width: '258px', borderRadius: '5px', border: '1px solid #C9961A' }}
//                 />
//                 {suggestions.length > 0 && (
//                   <div style={{ position: 'absolute', top: '40px', width: '100%', background: 'white', borderRadius: '5px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                     {suggestions.map((suggestion, index) => (
//                       <div
//                         key={index}
//                         onClick={() => handleSuggestionClick(suggestion)}
//                         style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
//                       >
//                         {suggestion.name}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//             <FaSearch onClick={handleSearchClick} style={{ cursor: 'pointer', color: '#C9961A', fontSize: '1.5rem', marginRight: '20px' }} />
//           </div>
//         </div>

//         <div className="secContentthree grid">
//           {currentProducts.map((product) => (
//             <div key={product._id} className="singleListingthree" >
//               <div  className="imgDiv">
//                 <img src={product.files[0]?.url} alt={product.name} onClick={() => handleProductClick(product)} />
//               </div>
//               <div className="info">
//                 <h2 className="name">{product.name}</h2>
//                 <p>{truncateDescription(product.description)}</p>
//               </div>
//               <div className="btn-footer-card">
//               <button
//                 className="plusButton"
//                 onClick={() => handleProductClick(product)}
//                 style={{
//                   color: '#C9961A',
//                   background: "rgb(205 198 198 / 0%)",
//                   border: '1px solid #C9961A', 
//                   borderRadius: '15px',
//                   width: '45%',
//                   fontFamily: "'Playfair Display', serif",
//                   alignItems: 'center', 
//                   marginBottom: '1rem',
//                   padding: '0.3rem',
//                   display:"flex",
//                   cursor: 'pointer',
//                   justifyContent: "center"
//                 }}
//               >
//              <span>Voir détails</span>    <span className="eye-icon"><MdOutlineVisibility  /></span> 
//               </button>
//               <button
//                 className="plusButton"
//                 onClick={() => handleAddToCart(product._id)}
//                 style={{
//                   color: '#C9961A',
//                   background: "rgb(205 198 198 / 56%)",
//                   border: '1px solid #C9961A', 
//                   borderRadius: '15px',
//                   width: '45%',
//                   fontFamily: "'Playfair Display', serif",
//                   alignItems: 'center', 
//                   marginBottom: '1rem',
//                   padding: '0.3rem',
//                   cursor: 'pointer',
//                   display:"flex",
           
//                   justifyContent: "center"
//                 }}
//               >
                 
//                 <span>Ajouter au</span>    <span className="eye-icon"><MdOutlineShoppingCart /></span> 
//               </button>
//               </div>
            
//             </div>
//           ))}
//         </div>
        
//         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//           <Pagination
//             count={Math.ceil(filteredProducts.length / productsPerPage)}
//             page={currentPage}
//             onChange={handlePageChange}
//             variant="outlined"
//             shape="rounded"
//             color="primary"
//           />
//         </div>
//       </div>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={{ ...modalStyle, display: 'flex', flexDirection }}>
//           {selectedProduct && (
//             <>
//               <div style={{ display: 'flex', alignItems: 'center', flexDirection: flexDirection }}>
//                 <img
//                   src={selectedProduct.files[0]?.url}
//                   alt={selectedProduct.name}
//                   style={{ width: flexDirection === 'column' ? '50%' : '30%', marginRight: flexDirection === 'column' ? '0' : '20px', borderRadius: '30px' }}
//                 />
//                 <div style={{ textAlign: flexDirection === 'column' ? 'center' : 'left', marginTop: flexDirection === 'column' ? '20px' : '0' }}>
//                   <h2 id="modal-modal-title" style={titleStyle}>
//                     Produit: <span style={{ color: 'white' }}>{selectedProduct.name}</span>
//                   </h2>
//                   <p id="modal-modal-description" style={{textStyle,color:'white'}}>
//                     Détails: <span>{selectedProduct.description}</span>
//                   </p>
//                 </div>
//               </div>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Listingthree;
import React, { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Listingthree.css";
import CatalogContext from "../Listing/Catalogcontext";
import { getAllProducts } from "../../actions/product.actions";
import { addToCarttwo, getCarttwo } from '../../actions/carttwo.actions';
import { MdOutlineShoppingCart, MdOutlineVisibility } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FaSearch } from "react-icons/fa";
import Pagination from '@mui/material/Pagination'; // Importer le composant Pagination de Material-UI

const manuel = ["Tournevis", "Marteaux", "Pinces", "Clés", "Scies", "Mesures"];
const electriq = ["Interrupteurs", "Prises de courant", "Câbles électriques", "Lampes et luminaires", "Disjoncteur", "Boîtes de jonction"];
const jardin = ["Tondeuses à gazon", "Taille-haies", "Brouettes", "Arrosoirs"];
const fixation = ["Vis", "Clous", "Boulons", "Écrous", "Crochets", "Chevilles", "Rivet", "Goujons d'ancrage"];
const menuiserie = ["Poignées", "Serrures", "Charnières", "Verrous"];
const plomberie = ["Robinets", "Raccords", "Collecteurs", "Tuyaux", "Éviers", "Toilettes", "Douches", "Siphons"];
const peinture = ["Peinture et décoration", "Pinceaux et Rouleaux", "Rubans de masquage", "Bâches de protection", "Diluants et solvants", "Mastics et enduits"];
const securite = ["Casques", "Lunettes", "Gants", "Vêtements"];
const construction = ["Plâtre", "Ciment", "Étanchéité"];

const catalogData = {
  manuel,
  electriq,
  jardin,
  fixation,
  menuiserie,
  plomberie,
  peinture,
  securite,
  construction
};

const getModalStyle = () => {
  const baseStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#122023',
    color: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const titleStyle = {
    color: 'gold',
    fontWeight: 'bold',
  };
  const textStyle = {
    color: 'white',
    textAlign: 'justify',
  };

  const width = window.innerWidth;

  if (width < 580) {
    return {
      ...baseStyle,
      width: '80%',
      flexDirection: 'column', // Stack image and text vertically
      titleStyle: { ...titleStyle, fontSize: '0.7rem' },
      textStyle: { ...textStyle, fontSize: '0.8rem' },
    };
  } else {
    return {
      ...baseStyle,
      width: '70%',
      flexDirection: 'row', // Place image and text side by side
      titleStyle: { ...titleStyle, fontSize: '0.9rem' },
    };
  }
};

const Listingthree = () => {
  const dispatch = useDispatch();
  const { catalog, catalogName } = useContext(CatalogContext);
  const mokles = useSelector(state => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cart = useSelector(state => state.carttwo.carttwo);
  const productsPerPage = 12;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if (catalog && mokles) {
      const filtered = mokles.filter(product => catalogData[catalog].includes(product.type));
      setFilteredProducts(filtered);
    }
  }, [catalog, mokles]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    const filtered = mokles.filter(product => product.type === type);
    setFilteredProducts(filtered);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery("");
    if (!searchOpen) {
      setFilteredProducts(mokles);
      setSuggestions([]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0) {
      const filteredSuggestions = mokles.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddToCart = (productId) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      console.error("Cart ID is not found in localStorage");
      return;
    }
    dispatch(addToCarttwo(cartId, productId, 1));
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setFilteredProducts([suggestion]);
    setSuggestions([]);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const truncateDescription = (description, product) => {
    const maxLength = 120;
    if (description.length > maxLength) {
      return (
        <>
          {description.slice(0, maxLength)}
          <span style={{ color: 'rgb(201, 150, 26)', cursor: "pointer" }} onClick={() => handleProductClick(product)}>..... Voir plus</span>
        </>
      );
    }
    return description;
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const modalStyle = getModalStyle();
  const { titleStyle, flexDirection, textStyle } = modalStyle;

  return (
    <div className="Listingthree containerNew" id="listing-three">
      <div className="secContainerthree">
        <div className="secHeader">
          <h1 style={{
            color: '#C9961A',
            fontSize: '2rem',
            marginBottom: '2rem',
            letterSpacing: '0.2em',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '500',
            textTransform: 'uppercase',
          }}>
            Nos Produits
          </h1>
          <h1 className="title" style={{ letterSpacing: '0.1em', }}>
            Gamme de produits exclusifs
            <span className="orangeDot"> .</span>
          </h1>
          <p style={{ marginBottom: '4rem', marginTop: '2rem' }}>
            Découvrez nos produits exclusifs qui dépassent les frontières de l'excellence pour satisfaire vos exigences.
          </p>

          {catalogName && (
            <div className="catalog-container">
              <span>{catalogName}</span>
              <span className="catalog-icon">⬇️</span>
            </div>
          )}
          <div className="btns flex">
            {catalogData[catalog].map((name, index) => (
              <button
                key={index}
                className="btnn3"
                onClick={() => handleTypeClick(name)}
                style={{
                  color: selectedType === name ? 'white' : '#C9961A',
                  backgroundColor: selectedType === name ? '#C9961A' : 'white',
                  border: '2px solid #C9961A',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '0px',
                  padding: "10px 5px",
                  minWidth: "104px",
                  cursor: 'pointer',
                }}
              >
                {name}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'flex-end', alignItems: 'center', position: 'relative' }}>
            {searchOpen && (
              <div style={{ position: 'absolute', right: '40px', zIndex: 1000 }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Chercher par nom"
                  style={{ padding: '10px', width: '258px', borderRadius: '5px', border: '1px solid #C9961A' }}
                />
                {suggestions.length > 0 && (
                  <div style={{ position: 'absolute', top: '40px', width: '100%', background: 'white', borderRadius: '5px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    {suggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                      >
                        {suggestion.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <FaSearch onClick={handleSearchClick} style={{ cursor: 'pointer', color: '#C9961A', fontSize: '1.5rem', marginRight: '20px' }} />
          </div>
        </div>

        <div className="secContentthree grid">
          {currentProducts.map((product) => (
            <div key={product._id} className="singleListingthree" >
              <div  className="imgDiv">
                <img src={product.files[0]?.url} alt={product.name} onClick={() => handleProductClick(product)} />
              </div>
              <div className="info">
                <h2 className="name">{product.name}</h2>
                <p>{truncateDescription(product.description, product)}</p>
              </div>
              <div className="btn-footer-card">
                <button
                  className="plusButton"
                  onClick={() => handleProductClick(product)}
                  style={{
                    color: '#C9961A',
                    background: "rgb(205 198 198 / 0%)",
                    border: '1px solid #C9961A',
                    borderRadius: '15px',
                    width: '45%',
                    fontFamily: "'Playfair Display', serif",
                    alignItems: 'center',
                    marginBottom: '1rem',
                    padding: '0.3rem',
                    display: "flex",
                    cursor: 'pointer',
                    justifyContent: "center"
                  }}
                >
                  <span>Voir détails</span> <span className="eye-icon"><MdOutlineVisibility /></span>
                </button>
                <button
                  className="plusButton"
                  onClick={() => handleAddToCart(product._id)}
                  style={{
                    color: '#C9961A',
                    background: "rgb(205 198 198 / 56%)",
                    border: '1px solid #C9961A',
                    borderRadius: '15px',
                    width: '45%',
                    fontFamily: "'Playfair Display', serif",
                    alignItems: 'center',
                    marginBottom: '1rem',
                    padding: '0.3rem',
                    cursor: 'pointer',
                    display: "flex",

                    justifyContent: "center"
                  }}
                >

                  <span>Ajouter au</span> <span className="eye-icon"><MdOutlineShoppingCart /></span>
                </button>
              </div>

            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / productsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalStyle, display: 'flex', flexDirection }}>
          {selectedProduct && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: flexDirection }}>
                <img
                  src={selectedProduct.files[0]?.url}
                  alt={selectedProduct.name}
                  style={{ width: flexDirection === 'column' ? '50%' : '30%', marginRight: flexDirection === 'column' ? '0' : '20px', borderRadius: '30px' }}
                />
                <div style={{ textAlign: flexDirection === 'column' ? 'center' : 'left', marginTop: flexDirection === 'column' ? '20px' : '0' }}>
                  <h2 id="modal-modal-title" style={titleStyle}>
                    Produit: <span style={{ color: 'white' }}>{selectedProduct.name}</span>
                  </h2>
                  <p id="modal-modal-description" style={{ textStyle, color: 'white' }}>
                    Détails: <span>{selectedProduct.description}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Listingthree;
