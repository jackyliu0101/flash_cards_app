const FlashCard = ({ id, text, date, handleDeleteFlashCard }) => {
  return (
    <div className='flashcard'>
      <span> {text} </span>
      <div className='flashcard-footer'>
        <small> {date} </small>
        <button onClick={() => handleDeleteFlashCard(id)}> delete </button>
      </div>
    </div>
  );
}

export default FlashCard;
