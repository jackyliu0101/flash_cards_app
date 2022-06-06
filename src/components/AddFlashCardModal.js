import React from 'react';
import { useState } from 'react';

const AddFlashCardModal = (props) => {
  const [flashCardText, setFlashCardText] = useState('');
  const [flashCardAnswer, setFlashCardAnswer] = useState('');

  if (!props.show) {
    return null;
  }

  const handleCancel = () => {
    setFlashCardText("");
    setFlashCardAnswer("");
    props.onClose();
  }

  const handleTextChange = (event) => {
    setFlashCardText(event.target.value);
  }

  const handleAnswerChange = (event) => {
    setFlashCardAnswer(event.target.value);
  }

  const handleSaveClick = () => {
    if ((flashCardText.trim().length > 0) && (flashCardAnswer.trim().length > 0)) {
      props.handleAddFlashCard(flashCardText, flashCardAnswer);
      setFlashCardText("");
      setFlashCardAnswer("");
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
          <h5> Question </h5>
          <textarea
            rows="10"
            value={flashCardText}
            placeholder="enter question here..."
            onChange={handleTextChange} >
          </textarea>
          <h5> Answer </h5>
          <textarea
            rows="10"
            value={flashCardAnswer}
            placeholder="enter answer here..."
            onChange={handleAnswerChange} >
          </textarea>
        </div>
        <div className='modal-footer'>
          <button onClick={handleSaveClick}> Save </button>
          <button onClick={handleCancel}> Cancel </button>
        </div>
      </div>
    </div>
  );
}

export default AddFlashCardModal
