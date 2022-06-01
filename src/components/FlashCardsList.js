import FlashCard from './FlashCard';
import AddFlashCard from './AddFlashCard'

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
      <AddFlashCard handleAddFlashCard={handleAddFlashCard} />
    </div>
  );
}

export default FlashCardsList;
