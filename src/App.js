import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';
import Error from './Error';
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/movies/s=:id" element={<Movie />} />
      <Route path="*" exact element={<Error />} />
    </Routes>
  );
}

export default App;
