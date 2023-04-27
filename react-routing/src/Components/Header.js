import React from 'react';
import { NavLink } from 'react-router-dom';

const Component = () => {
  return (
    <nav>
        <ul>
          <li>
            <NavLink to = "/">Home</NavLink>
          </li>
          <li>
            <NavLink to = "/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to = "/About">About</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Component
