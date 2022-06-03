import FlashCard from './FlashCard';

const FlashCardsList = ({ flashCards, handleDeleteFlashCard }) => {
  return (
    <div className='flash-cards-list'>
      {flashCards.map((flashCard) => (
        <FlashCard
          id={flashCard.id}
          text={flashCard.text}
          answer={flashCard.answer}
          date={flashCard.date}
          handleDeleteFlashCard={handleDeleteFlashCard}/>
        ))}
    </div>
  );
}

export default FlashCardsList;
