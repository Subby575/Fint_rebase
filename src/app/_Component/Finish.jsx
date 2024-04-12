import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
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

export default function Finish({params}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("uuu"+params);
  var k=params.slice(4,6);
  Number(k);
  k++;
  const n=params.slice(0,4)+k;
  return (
    <div>
      <Button className='p-1 bg-emerald-500 text-teal-100 hover:text-teal-700 hover:bg-emerald-200' onClick={handleOpen}>Finish</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center text-gray-800'>
            You completed The Level ✅
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-center text-gray-600'>
            Explore other Levels
            <Link href={`/Learn/${n}`} className='block bg-emerald-600 text-white mx-6 my-4 p-3 text-center hover:text-black hover:bg-emerald-200'>CheckOut Now</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
