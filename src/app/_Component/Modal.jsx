import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Mod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  setTimeout(() => {
   setOpen(true);
  }, 3500);
  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-description" className='text-slate-800' sx={{ mt: 2 }}>
            <span className='text-5xl text-center justify-center ml-32'>🏆</span><br/>
          You Have SuccessFully Completed The Level 
          </Typography>
          <a href='/Leaderboard'>
          <Typography id="keep-mounted-modal-title" className='text-teal-400 text-center' variant="h6" component="h2">
          Check leaderBoard
          </Typography>
          </a>
        </Box>
      </Modal>
    </div>
  );
}
