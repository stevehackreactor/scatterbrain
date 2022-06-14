import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


function AddTaskModal({open, handleClose}) {

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

  return (
    <Modal
    open={open}
    onClose={handleClose}
  >
    <Box sx={style}>
      <div>modal text goes here</div>
      <button onClick={handleClose}>Close</button>
    </Box>
  </Modal>
  );
}

export default AddTaskModal;