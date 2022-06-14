import './App.css';
import AddTaskModal from './components/AddTaskModal';
import { useState } from 'react';


function App() {
  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false);

  const handleClose = () => {
    setAddTaskModalOpen(false)
  }

  const handleOpen = () => {
    setAddTaskModalOpen(true)
  }

  console.log(typeof handleClose, handleClose)

  return (
    <div className="App">
      <button onClick={handleOpen}>
        Add New Item
      </button>
      {addTaskModalOpen && <AddTaskModal open={addTaskModalOpen} handleClose={handleClose} />}
    </div>
  );
}

export default App;
