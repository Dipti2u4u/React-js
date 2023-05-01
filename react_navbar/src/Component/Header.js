import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Component = () => {
  return (
    <div className='main'>
        <div className='logo'>
          <h1>React_NavBar</h1>
        </div>
        <div className='sub'>
        <ul>
            <li>
                <Link to = "/" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
                <Link to = "/Contact" style={{ textDecoration: 'none' }}>Contact</Link>
            </li>
            <li>
                <Link to = "/About" style={{ textDecoration: 'none' }}>About</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Component
