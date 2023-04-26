import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
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

