import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
      <>
        <h1>Covid Tracker</h1>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </>
    
  )
}

export default App;