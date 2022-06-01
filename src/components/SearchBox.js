import React from 'react';

const SearchBox = ({ handleSearch }) => {
  return (
    <div className='search'>
      <input type="text" onChange={(event) => handleSearch(event.target.value)} placeholder="search" />
    </div>
  );
}

export default SearchBox;
