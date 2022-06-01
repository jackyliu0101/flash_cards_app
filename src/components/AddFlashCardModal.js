import React from 'react';

const AddFlashCardModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className='modal' onClick={props.onClose}>
    <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h4> Add Flash Card </h4>
        </div>
        <div className='modal-body'>
          <textarea
            rows="8"
            cols="10"
            placeholder="type to add a flashcard..." >
          </textarea>
        </div>
        <div className='modal-footer'>
          <button> Save </button>
          <button onClick={props.onClose}> Cancel </button>
        </div>
      </div>
    </div>
  );
}

export default AddFlashCardModal
