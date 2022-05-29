import React from 'react';
import SearchBox from './components/SearchBox';
import FlashCardsHeading from './components/FlashCardsHeading'

function App() {
  return (
    <div>
      <div>
        <FlashCardsHeading heading = "Flash Cards" />
      </div>
      <div>
        <SearchBox />
      </div>
      <button> Add Flash Card </button>
    </div>
  );
}

export default App;
