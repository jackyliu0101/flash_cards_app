import FlashCard from './FlashCard';

const FlashCardsList = ({ flashCards, handleAddFlashCard, handleDeleteFlashCard }) => {
  return (
    <div className='flash-cards-list'>
      {flashCards.map((flashCard) => (
        <FlashCard
          id={flashCard.id}
          text={flashCard.text}
          date={flashCard.date}
          handleDeleteFlashCard={handleDeleteFlashCard}/>
        ))}
    </div>
  );
}

export default FlashCardsList;
