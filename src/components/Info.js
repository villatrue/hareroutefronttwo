import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Click for Instructions!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Quick Info</h2>
            <p id="transition-modal-description">The first address you enter will be your starting address and the last address you enter will be your last stop on your route.</p>
            <p id="transition-modal-description">Enter your address correctly and we will determine the latitude and longitude of your address.</p>
            <p id="transition-modal-description">Once you click the "Optimize Route" button we will create the fastet route possible to get to all the places you'll need to go!</p>
            <p id="transition-modal-description">The limit of stops including your first and last stop is 10.</p>
            <p id="transition-modal-description">Hit "esc' or outside of this box to continue, andd get where you have to go the fastest.</p>      
          </div>
        </Fade>
      </Modal>
    </div>
  );
}