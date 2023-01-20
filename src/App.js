import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={(<HomePage />)}
        />
        <Route
          path="/detials"
          element={(<Details />)}
        />

      </Routes>

    </>
  );
}

export default App;
