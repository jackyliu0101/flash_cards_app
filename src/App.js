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
        <FlashCardsList flashCards={flashCards}/>
      </div>
    </div>
  );
}

export default App;
