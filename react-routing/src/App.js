import React from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';
import { Routes , Route } from 'react-router-dom';

const App = () => {
  return (
          <Routes>
              <Route path="/" element={ <Home/> }>              {/* this is parent root */}
                <Route path = "/about" element = { <About /> }/>
                <Route path = "/contact" element = { <Contact /> }/>
                <Route path = "*" element = { <Error /> }/>
              </Route>
          </Routes> 
  )
}

export default App

