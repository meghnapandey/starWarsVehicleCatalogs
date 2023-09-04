import PropTypes from 'prop-types'; // Import PropTypes
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import './App.css'

export function PopupCard({ vehicle }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div style={{float: 'right', paddingTop: '30px'}}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} className='btn'>
        More Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ backgroundColor: 'beige', fontWeight: 'bold' }}>
          Specifications: {vehicle.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>Model: {vehicle.model}</li>
              <li>Manufacturer: {vehicle.manufacturer}</li>
              <li>Vehicle Class: {vehicle.vehicle_class}</li>
              <li>Crew: {vehicle.crew}</li>
              <li>Passengers Size: {vehicle.passengers}</li>
              <li>Cargo Capacity: {vehicle.cargo_capacity}</li>
              <li>Max Speed: {vehicle.max_atmosphering_speed}</li>
              <li>Size/Length of the vehicle: {vehicle.length}</li>
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// Add PropTypes validation for the vehicle prop
PopupCard.propTypes = {
  vehicle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    vehicle_class: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    cargo_capacity: PropTypes.string.isRequired,
    max_atmosphering_speed: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
};
