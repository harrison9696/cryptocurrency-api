import React from 'react';
import './Search.scss';

const Search = ({ handleChange }) => {
  return (
    <div className="search text-center mx-50">
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
