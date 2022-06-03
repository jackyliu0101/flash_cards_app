import { useState } from 'react';

const FlashCard = ({ id, text, answer, date, handleDeleteFlashCard }) => {
  const [revealAns, setRevealAns] = useState(false);

  return (
    <div className='flashcard'>
      <div className='flashcard-header'>
        <h4> {!revealAns ? 'Question' : 'Answer'} </h4>
        <button onClick={() => setRevealAns(!revealAns)}> {!revealAns ? 'Reveal' : 'Back'} </button>
      </div>
      <div className='flashcard-body'> {!revealAns ? text : answer} </div>
      <div className='flashcard-footer'>
        <small> {date} </small>
        <button onClick={() => handleDeleteFlashCard(id)}> delete </button>
      </div>
    </div>
  );
}

export default FlashCard;
