import React from 'react';
import './Search.scss';

const Search = ({ handleChange }) => {
  return (
    <div className="search">
      <form>
        <input
          className="search__input"
          type="text"
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
