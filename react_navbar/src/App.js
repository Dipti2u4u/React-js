import React from 'react'
import Header from "./Component/Header"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import { Routes , Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Header />
          <Routes>
                <Route path="/" element={ <Home/> } />              
                <Route path = "/about" element = { <About /> }/>
                <Route path = "/contact" element = { <Contact /> }/>
                <Route path = "*" element = { <Error /> }/>
          </Routes> 
    </div>
  )
}

export default App


