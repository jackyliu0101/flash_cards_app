import { useState } from 'react';

const AddFlashCard = ({ handleAddFlashCard }) => {
  const [flashCardText, setFlashCardText] = useState('');

  const handleChange = (event) => {
    setFlashCardText(event.target.value);
  }

  const handleSaveClick = () => {
    if (flashCardText.trim().length > 0) {
      handleAddFlashCard(flashCardText);
      setFlashCardText("");
    }
  }

  return (
    <div className='flashcard'>
      <textarea
        rows="8"
        cols="10"
        placeholder="type to add a flashcard..."
        value={flashCardText}
        onChange={handleChange}>
      </textarea>
      <button onClick={handleSaveClick}> Save </button>
    </div>
  );
}

export default AddFlashCard
