import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({text}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const deleteHandler = () => {
    setModalIsOpen(true)
  }
  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  const [isDeleted, setIsDeleted] = useState(false);
  const deleteTodo = () =>{
    setIsDeleted(true);
  }
  if(isDeleted){
    return null;
  }
  
  return (
    <div className='card'>
      <h2>{text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={deleteTodo}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo;