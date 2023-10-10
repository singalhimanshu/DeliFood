import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const handleClick = () => {
    console.log('Button was clicked!')
  }
  return (
    <div className='navbar'>
      <div className='nav-icon'>
        <h2>My App</h2>
      </div>
      <div className='nav-menu'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/menu' className='nav-link'>
              Menu
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </li>
        </ul>

        <div className='nav-btn'>
          <Button onClick={handleClick} children={'signin'} />
          <Button onClick={handleClick} children={'cart'} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
