import {Button} from '@mui/material';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './App.css'

export function PopupCard(vehicle) {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
        setOpen(false)
      }
    return (
      <div style={{float: 'right', paddingTop: '30px'}}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} className='btn'>
          More Details
        </Button>
        <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{backgroundColor: "beige", fontStyle:"bold"}}>Specifications: {vehicle.vehicle.name}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <li>Model: {vehicle.vehicle.model}</li>
              <li>ManuFacturer: {vehicle.vehicle.manufacturer}</li>
              <li>Vehicle Class: {vehicle.vehicle.vehicle_class}</li>
              <li>Crew: {vehicle.vehicle.crew}</li>
              <li>Passengers Size: {vehicle.vehicle.passengers}</li>
              <li>Cargo Capacity: {vehicle.vehicle.cargo_capacity}</li>
              <li>Max Speed: {vehicle.vehicle.max_atmosphering_speed}</li>
              <li>Size/Length of the vehicle: {vehicle.vehicle.length}</li>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      </div>
    )
  }
