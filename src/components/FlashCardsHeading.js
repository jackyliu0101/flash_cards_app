import React from 'react';
import { useState } from 'react';
import AddFlashCardModal from './AddFlashCardModal';

const FlashCardsHeading = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='heading'>
      <h1> Flash Cards </h1>
      <button onClick={() => setShowModal(true)}> Add Flash Card </button>
      <AddFlashCardModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default FlashCardsHeading;
