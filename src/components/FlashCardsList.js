import FlashCard from './FlashCard';

const FlashCardsList = ({ flashCards }) => {
  return (
    <div class='flash-cards-list'>
      {flashCards.map((flashCard) => <FlashCard id={flashCard.id} text={flashCard.text} date={flashCard.date}/>)}

    </div>
  );
}

export default FlashCardsList;
