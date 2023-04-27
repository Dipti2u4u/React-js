import React from 'react'
/*import { Link } from 'react-router-dom'*/
/*import { NavLink } from 'react-router-dom'*/
import Component from './Components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <Component />
      <Outlet />
      
    </div>
  )
}

export default Home