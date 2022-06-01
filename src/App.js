import React from 'react';
import SearchBox from './components/SearchBox';
import FlashCardsHeading from './components/FlashCardsHeading';
import FlashCardsList from './components/FlashCardsList';

function App() {
  return (
    <div>
      <div>
        <FlashCardsHeading heading="Flash Cards" />
      </div>
      <div>
        <SearchBox />
      </div>
      <button> Add Flash Card </button>
      <FlashCardsList />
    </div>
  );
}

export default App;
