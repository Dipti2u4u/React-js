import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { Routes , Route } from 'react-router-dom';

const App = () => {
  return (
          <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path = "/about" element = { <About /> }/>
              <Route path = "/contact" element = { <Contact /> }/>
          </Routes> 
  )
}

export default App

