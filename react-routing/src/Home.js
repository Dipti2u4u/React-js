import React from 'react'
/*import { Link } from 'react-router-dom'*/
/*import { NavLink } from 'react-router-dom'*/
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <Header />
      <Outlet />
      
    </div>
  )
}

export default Home