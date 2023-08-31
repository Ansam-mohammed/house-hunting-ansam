import  React , { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function IconCheckboxes() {
    const [open, setOpen] = React.useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            setOpen(true);
        }
      };

  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />}   checked={isChecked}   onChange={handleCheckboxChange}  checkedIcon={<Favorite />} style={{color:'red'}} />
      <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Add to favorite"
            action={action}
        />
    </div>
  );
}