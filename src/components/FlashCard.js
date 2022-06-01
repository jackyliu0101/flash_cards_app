const FlashCard = ({ id, text, date }) => {
  return (
    <div className='flashcard'>
      <span> {text} </span>
      <div className='flashcard-footer'>
        <small> {date} </small>
      </div>
    </div>
  );
}

export default FlashCard;
