import React, { useState, useContext } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('superman');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure you have the keyword use for custom hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
