import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import SearchBox from './components/SearchBox';
import FlashCardsHeading from './components/FlashCardsHeading';
import FlashCardsList from './components/FlashCardsList';

function App() {
  const [flashCards, setFlashCards] = useState([
    {
      id: nanoid(),
      text: 'first flashcard',
      date: '01/01/2022'
    },
    {
      id: nanoid(),
      text: 'second flashcard',
      date: '02/02/2022'
    },
    {
      id: nanoid(),
      text: 'third flashcard',
      date: '03/03/2022'
    },
    {
      id: nanoid(),
      text: 'another flashcard',
      date: '04/03/2022'
    }
  ]);

  const addFlashCard = (text) => {
    const date = new Date();
    const newFlashCard = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid()
    };

    const newFlashCards = [...flashCards, newFlashCard];
    setFlashCards(newFlashCards);
  }

  const deleteFlashCard = (id) => {
    const newFlashCards = flashCards.filter((note) => note.id !== id);
    setFlashCards(newFlashCards);
  }

  return (
    <div>
      <div>
        <FlashCardsHeading heading="Flash Cards" />
      </div>
      <div>
        <SearchBox />
      </div>
      <button> Add Flash Card </button>
      <div className='flash-cards-container'>
        <FlashCardsList
          flashCards={flashCards}
          handleAddFlashCard={addFlashCard}
          handleDeleteFlashCard={deleteFlashCard}/>
      </div>
    </div>
  );
}

export default App;
