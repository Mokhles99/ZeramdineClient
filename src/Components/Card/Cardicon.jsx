import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';  
import { Modal, Box, Typography, TextField, Button, Badge, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { MdShoppingCart } from "react-icons/md";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SendIcon from '@mui/icons-material/Send';
import { getCarttwo, updateCartWithUserInfo, removeItemFromCart, updateItemQuantity, createNewCart, clearCart } from '../../actions/carttwo.actions';
import { styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function CartIcon() {
    const [modalOpen, setModalOpen] = useState(false);
    const [userInfoModalOpen, setUserInfoModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const carttwo = useSelector(state => state.carttwo.carttwo || { items: [] });

    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        const cartId = localStorage.getItem('cartId');
        if (cartId) {
            dispatch(getCarttwo(cartId));
        } else {
            dispatch(createNewCart());
        }
    }, [dispatch]);

    // useEffect(() => {
    //     if (carttwo && carttwo.items) {
    //         const updatedQuantities = {};
    //         carttwo.items.forEach(item => {
    //             updatedQuantities[item._id] = item.quantity;
    //         });
    //         setItemQuantities(updatedQuantities);
    //     }
    // }, [carttwo.items]);

    useEffect(() => {
        if (carttwo && carttwo.items) {
            const updatedQuantities = {};
            let quantitiesChanged = false;
    
            carttwo.items.forEach(item => {
                if (itemQuantities[item._id] !== item.quantity) {
                    updatedQuantities[item._id] = item.quantity;
                    quantitiesChanged = true;
                }
            });
    
            if (quantitiesChanged) {
                setItemQuantities(updatedQuantities);
            }
        }
    }, [carttwo.items]);
    

    const handleOpenModal = () => {
        const cartId = localStorage.getItem('cartId');
        dispatch(getCarttwo(cartId));
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenUserInfoModal = () => {
        setUserInfoModalOpen(true);
        setModalOpen(false);
    };

    const handleCloseUserInfoModal = () => {
        setUserInfoModalOpen(false);
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{8}$/;

        if (!userInfo.name) newErrors.name = 'Nom requis';
        if (!userInfo.surname) newErrors.surname = 'Prénom requis';
        if (!userInfo.email) {
            newErrors.email = 'Email requis';
        } else if (!emailRegex.test(userInfo.email)) {
            newErrors.email = 'Email invalide : il faut la forme ****@****';
        }
        if (!userInfo.phoneNumber) {
            newErrors.phoneNumber = 'Numéro de téléphone requis';
        } else if (!phoneRegex.test(userInfo.phoneNumber)) {
            newErrors.phoneNumber = 'Numéro de téléphone: il doit contenir 8 chiffres';
        }
         
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        const cartId = localStorage.getItem('cartId');
    
        try {
            await dispatch(updateCartWithUserInfo(cartId, userInfo));
            handleCloseUserInfoModal();
            dispatch(clearCart());
            localStorage.removeItem('cartItems');
            dispatch(createNewCart());

            // Show success alert
            MySwal.fire({
                icon: 'success',
                title: 'Envoyé!',
                text: 'Votre demande de devis a été envoyée avec succès.',
                confirmButtonColor: '#1D8D7F'
            });

            // Clear user info fields
            setUserInfo({
                name: '',
                surname: '',
                email: '',
                phoneNumber: '',
                message: ''
            });

        } catch (error) {
            console.error('Failed to update cart:', error);
        }
    };

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleIncreaseQuantity = (itemId) => {
        const cartId = localStorage.getItem('cartId');
        const newQuantity = (itemQuantities[itemId] || 0) + 1;
        setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
        dispatch(updateItemQuantity(cartId, itemId, newQuantity));
    };
    
    // const handleDecreaseQuantity = (itemId) => {
    //     const cartId = localStorage.getItem('cartId');
    //     if (itemQuantities[itemId] > 1) {
    //         const newQuantity = itemQuantities[itemId] - 1;
    //         setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
    //         dispatch(updateItemQuantity(cartId, itemId, newQuantity));
    //     } else {
    //         const newItems = { ...itemQuantities };
    //         delete newItems[itemId];
    //         setItemQuantities(newItems);
    //         dispatch(removeItemFromCart(carttwo._id, itemId));
    //     }
    //     dispatch(getCarttwo(cartId));
    // };


    const handleDecreaseQuantity = async (itemId) => {
        const cartId = localStorage.getItem('cartId');
    
        if (itemQuantities[itemId] > 1) {
            const newQuantity = itemQuantities[itemId] - 1;
            setItemQuantities({ ...itemQuantities, [itemId]: newQuantity });
            await dispatch(updateItemQuantity(cartId, itemId, newQuantity));
        } else {
            const newItems = { ...itemQuantities };
            delete newItems[itemId];
            setItemQuantities(newItems);
            await dispatch(removeItemFromCart(carttwo._id, itemId));
        }
    
        // Fetch the updated cart after the operation
        dispatch(getCarttwo(cartId));
    };
    
    // const handleRemoveItem = (itemId) => {
    //     const cartId = localStorage.getItem('cartId');
    //     dispatch(removeItemFromCart(carttwo._id, itemId));
    //     setItemQuantities(prevQuantities => {
    //         const newQuantities = { ...prevQuantities };
    //         delete newQuantities[itemId];
    //         return newQuantities;
    //     });
    //     dispatch(getCarttwo(cartId));
       
    // };

    const handleRemoveItem = async (itemId) => {
        const cartId = localStorage.getItem('cartId');
        
        // Remove the item from the cart
        await dispatch(removeItemFromCart(carttwo._id, itemId));
        
        // Update local state
        setItemQuantities(prevQuantities => {
            const newQuantities = { ...prevQuantities };
            delete newQuantities[itemId];
            return newQuantities;
        });
    
        // Fetch the updated cart
        dispatch(getCarttwo(cartId));
    };
    

    const getModalStyle = () => {
        const baseStyle = {
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: 400, 
            bgcolor: '#f1f1f1', 
            borderRadius: '30px', 
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            p: 4, 
            color: '#FFF', 
            fontFamily: 'cursive', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            gap: 2, 
            overflow: 'hidden', 
            border: '1px solid rgba(255, 255, 255, 0.2)'
        };
    
        const width = window.innerWidth;
    
        if (width <= 320) {
            return {
                ...baseStyle,
                width: 310,
                gap: 0, 
        
            };
        } else if (width <= 375) {
            return {
                ...baseStyle,
                width: 350, 
                gap: 0, 
            };
        } else {
            return baseStyle;
        }
    };
    
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#ffd700', 
            color: 'black',
            width: '10px',
            height: '15px',
            fontSize: '0.6rem',
            transform: 'translateY(-60%)',
            right: '-18px',
        },
    }));

    const getButtonAndTextStyle = () => {
        const baseButtonStyle = {
            marginRight: '4px',
            padding: '6px',
            minWidth: '32px',
        };

        const baseTextStyle = {
            fontSize: '0.9rem',
        };

        const width = window.innerWidth;

        if (width <= 320) {
            return {
                buttonStyle: {
                    ...baseButtonStyle,
                    padding: '1px',
                    minWidth: '20px',
                },
                textStyle: {
                    ...baseTextStyle,
                    fontSize: '0.6rem',
                },
            };
        } else if (width <= 375) {
            return {
                buttonStyle: {
                    ...baseButtonStyle,
                    padding: '3px',
                    minWidth: '30px',
                },
                textStyle: {
                    ...baseTextStyle,
                    fontSize: '0.5rem',
                },
            };
        } else {
            return {
                buttonStyle: baseButtonStyle,
                textStyle: baseTextStyle,
            };
        }
    };

    const { buttonStyle, textStyle } = getButtonAndTextStyle();

    return (
        <>
            <div className="cart-icon-fixed" onClick={handleOpenModal}>
                <StyledBadge badgeContent={carttwo ? carttwo.items.length : 0}>
                    <MdShoppingCart  style={{ color: '#987214', fontSize: 20 }} />
                </StyledBadge>
            </div>
            <Modal open={modalOpen} onClose={handleCloseModal} aria-labelledby="cart-modal-title" aria-describedby="cart-modal-description">
                <Box sx={getModalStyle()}>
                    <Typography id="cart-modal-title" variant="h6" component="h2" className="goldenCursiveText" style={{ color: "grey" }}>
                        Panier
                    </Typography>
                    <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto', color: 'black' }}>
                        {carttwo.items && carttwo.items.map((item) => {
                            const quantity = itemQuantities[item._id] || item.quantity;
                            return (
                                <ListItem key={item._id} alignItems="flex-start" sx={textStyle}>
                                    <ListItemText 
                                        primary={`${item.product.name} x ${quantity}`}
                                    />
                                    <IconButton sx={buttonStyle} onClick={() => handleIncreaseQuantity(item._id)}><ControlPointIcon sx={{ color: '#11A592' }}/></IconButton>
                                    <IconButton sx={buttonStyle} onClick={() => handleDecreaseQuantity(item._id)}><DoDisturbOnOutlinedIcon sx={{ color: '#ce9d29' }}/></IconButton>
                                    <IconButton sx={buttonStyle} onClick={() => handleRemoveItem(item._id)}><HighlightOffIcon sx={{ color: 'red' }}/></IconButton>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Button onClick={handleOpenUserInfoModal} variant="contained" sx={{
                        mt: 2, backgroundColor: '#fbfbfb', color: '#ce9d29',
                        fontSize: '15px', borderRadius: '20px',
                        '&:hover': { backgroundColor: '#ce9d29', color: '#fbfbfb' }
                    }}>
                        Devis 
                    </Button>
                </Box>
            </Modal>
            <Modal open={userInfoModalOpen} onClose={handleCloseUserInfoModal}>
                <Box component="form" onSubmit={handleSubmit} sx={getModalStyle()}>
                    <List sx={{ width: '100%', maxHeight: 200, overflow: 'auto', color: 'black' }}>
                        {carttwo.items && carttwo.items.map((item) => {
                            const quantity = itemQuantities[item._id] || item.quantity;
                            return (
                                <ListItem key={item._id} alignItems="flex-start" sx={textStyle}>
                                    <ListItemText 
                                        primary={`${item.product.name} x ${quantity}`}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                    <Box sx={{ width: '90%', borderBottom: '1px solid gray'}} /> 
                    <Typography id="cart-modal-title" variant="h6" component="h2" sx={{ color: 'gray' }}>
                        Informations utilisateur
                    </Typography>
                    <TextField 
                        label="Nom" 
                        variant="outlined" 
                        name="name" 
                        value={userInfo.name} 
                        onChange={handleUserInfoChange} 
                        fullWidth 
                        sx={{ mt: 2 }} 
                        error={!!errors.name} 
                        helperText={errors.name} 
                    />
                    <TextField 
                        label="Prénom" 
                        variant="outlined" 
                        name="surname" 
                        value={userInfo.surname} 
                        onChange={handleUserInfoChange} 
                        fullWidth 
                        sx={{ mt: 2 }} 
                        error={!!errors.surname} 
                        helperText={errors.surname} 
                    />
                    <TextField 
                        label="Email" 
                        variant="outlined" 
                        name="email" 
                        value={userInfo.email} 
                        onChange={handleUserInfoChange} 
                        fullWidth 
                        sx={{ mt: 2 }} 
                        error={!!errors.email} 
                        helperText={errors.email} 
                    />
                    <TextField 
                        label="Numéro de téléphone" 
                        variant="outlined" 
                        name="phoneNumber" 
                        value={userInfo.phoneNumber} 
                        onChange={handleUserInfoChange} 
                        fullWidth 
                        sx={{ mt: 2 }} 
                        error={!!errors.phoneNumber} 
                        helperText={errors.phoneNumber} 
                    />
                    <TextField 
                        label="Message" 
                        variant="outlined" 
                        name="message" 
                        multiline rows={4} 
                        value={userInfo.message} 
                        onChange={handleUserInfoChange} 
                        fullWidth 
                        sx={{ mt: 2 }} 
                        error={!!errors.message} 
                        helperText={errors.message} 
                    />
                    <Button type="submit" variant="contained" sx={{
                        mt: 2, backgroundColor: '#fbfbfb', color: '#ce9d29',
                        fontSize: '15px', borderRadius: '20px',
                        '&:hover': { backgroundColor: '#ce9d29', color: '#fbfbfb' }
                     }}
                     > Envoyer <SendIcon sx={{ ml:1}}/> </Button>
                </Box>
            </Modal>
        </>
    );
}

export default CartIcon;
