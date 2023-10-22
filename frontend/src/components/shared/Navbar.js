import React from 'react'
import Button from './Button'
import '../styles/Navbar.css'
import { FaCartPlus } from 'react-icons/fa'

const Navbar = () => {
  const handleClick = () => {
    console.log('Button was clicked!')
  }
  return (
    <div className='navbar flex-sb'>
      <div className='nav-icon flex-center'>
        <h2>DeliFooD</h2>
      </div>
      <div className='nav-menu flex-se'>
        <div className='nav-list flex-se'>
          <a href='/'>Home</a>
          <a href='/about'>About Us</a>
          <a href='/menu'>Menu</a>
          <a href='/contact'>Contact</a>
        </div>

        <div className='nav-btn flex btn'>
          <Button onClick={handleClick} children={'signin'} />
          <button className='btn btn-primary' onClick={handleClick}>
            Cart <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
