import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
      <>
        <CssBaseline />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    
  )
}

export default App;