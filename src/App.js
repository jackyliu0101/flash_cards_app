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
      answer: 'first answer',
      date: '01/01/2022'
    },
    {
      id: nanoid(),
      text: 'second flashcard',
      answer: 'second answer',
      date: '02/02/2022'
    },
    {
      id: nanoid(),
      text: 'third flashcard',
      answer: 'third answer',
      date: '03/03/2022'
    },
    {
      id: nanoid(),
      text: 'another flashcard',
      answer: 'another answer',
      date: '04/03/2022'
    }
  ]);

  const [searchText, setSearchText] = useState("");

  const addFlashCard = (text, answer) => {
    const date = new Date();
    const newFlashCard = {
      text: text,
      answer: answer,
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
    <div className='flash-cards-container'>
      <FlashCardsHeading handleAddFlashCard={addFlashCard}/>
      <SearchBox handleSearch={setSearchText}/>
      <FlashCardsList
        flashCards={flashCards.filter((flashCard) => flashCard.text.toLowerCase().includes(searchText))}
        handleAddFlashCard={addFlashCard}
        handleDeleteFlashCard={deleteFlashCard}/>
    </div>
  );
}

export default App;
