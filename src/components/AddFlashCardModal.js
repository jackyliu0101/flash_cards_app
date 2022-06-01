import React from 'react';
import { useState } from 'react';

const AddFlashCardModal = (props) => {
  const [flashCardText, setFlashCardText] = useState('');

  if (!props.show) {
    return null;
  }

  const handleChange = (event) => {
    setFlashCardText(event.target.value);
  }

  const handleSaveClick = () => {
    if (flashCardText.trim().length > 0) {
      props.handleAddFlashCard(flashCardText);
      setFlashCardText("");
      props.onClose();
    }
  }

  return (
    <div className='modal' onClick={props.onClose}>
    <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4> Add Flash Card </h4>
        </div>
        <div className='modal-body'>
          <textarea
            rows="10"
            value={flashCardText}
            placeholder="type to add a flashcard..."
            onChange={handleChange} >
          </textarea>
        </div>
        <div className='modal-footer'>
          <button onClick={handleSaveClick}> Save </button>
          <button onClick={props.onClose}> Cancel </button>
        </div>
      </div>
    </div>
  );
}

export default AddFlashCardModal
