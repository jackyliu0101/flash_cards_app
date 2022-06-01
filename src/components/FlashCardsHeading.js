import React from 'react';
import { useState } from 'react';
import AddFlashCardModal from './AddFlashCardModal';

const FlashCardsHeading = ({ handleAddFlashCard }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='heading'>
      <h1> Flash Cards </h1>
      <button onClick={() => setShowModal(true)}> Add Flash Card </button>
      <AddFlashCardModal show={showModal} handleAddFlashCard={handleAddFlashCard} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default FlashCardsHeading;
