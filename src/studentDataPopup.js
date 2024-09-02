import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({open, onClose, userData}) {

  const handleClose = () => {
    onClose()
  };

  return (
    <React.Fragment>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <div className="profile-image"><img src="/img/profileImage.png" alt="profile image" /> {userData.name}</div> 
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
        </IconButton>
        <DialogContent dividers >
          <Typography gutterBottom className='row'>
          <div className='col'><p><h5>Email</h5> {userData.email}</p></div>
          <div className='col'><p><h5>Phone</h5>{userData.phone}</p></div>
          </Typography>
          <hr/>
          <Typography gutterBottom className='row'>
           <p class><h5>Address</h5> { userData.address ? userData.address.street : ''} </p>
          </Typography>
          <hr/>
          <Typography gutterBottom className='row'>
            <div className='col'>
            <p class><h5>City</h5> { userData.address ? userData.address.city : ''}</p>
            </div>
            <div className='col'>
            <p class><h5>Zip</h5>{ userData.address ? userData.address.zip : ''}</p>
            </div>
            <div className='col'>
            <p class><h5>Country</h5> { userData.address ? userData.address.country : ''} </p></div>
          </Typography>
          <hr/>
          <Typography gutterBottom className='row'>
          <div className='col'><p><h5>Courses</h5></p>          
          <p><ul><li>{userData.courses? userData.courses[0]: ''}</li><li>{userData.courses? userData.courses[1]:''}</li></ul></p></div>
          <div className='col'><p><h5>GPA</h5>{userData.gpa}</p>          
          </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className='btn btn-danger'>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
