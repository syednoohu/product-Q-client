import React from 'react'
import './header.css'
import  '../index.css'

// import logo from '../assets/images/logo1.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src='../assets/images/logo1.png' alt="" />
      </div>
      <nav className='nav_links'>
        <ul className='navbar flex'>
          <li><a href="/Login"><span>LOGIN</span></a></li>
          <li><a href="/Logout"><span>LOGOUT</span> </a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
