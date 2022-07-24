import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={searchHandler} className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
