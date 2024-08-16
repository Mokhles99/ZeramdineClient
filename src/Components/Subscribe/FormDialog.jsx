import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import "./Subscribe.css";

export default function FormDialog({ open, onClose }) {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.name || !formValues.number) {
      alert('Veuillez remplir tous les champs.');
      return; 
    }
    alert('Formulaire soumis avec succès!');
    setFormValues({ email: '', name: '', number: '', message: '' }); 
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'rgb(222 223 233)',
          borderRadius: '60px',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
         
          {/* <Typography variant="h6" component="h2">
            Contactez-nous
          </Typography> */}
        </div>
        <DialogContent style={{ color: '#fff' }}>
          <TextField
            autoFocus
            // margin="dense"
            name="email"
            label="Adresse e-mail"
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
          <TextField
            margin="dense"
            name="name"
            label="Nom & Prenom"
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
          <TextField
            margin="dense"
            name="number"
            label="Numéro de téléphone"
            type="number"
            fullWidth
            variant="outlined"
            value={formValues.number}
            onChange={handleChange}
            InputLabelProps={{ style: { color: 'black' } }}
            inputProps={{ style: { color: 'black' } }}
          />
        </DialogContent>
        <DialogActions className="button-container" style={{ justifyContent: 'center' }}>
          <Button 
            type="submit"
            style={{
              color: '#C9961A',
              background: 'rgba(205, 198, 198, 0.36)',
              border: '2px solid #C9961A',
              fontFamily: "'Playfair Display', serif"
            }}
             
          >
            Envoyer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
