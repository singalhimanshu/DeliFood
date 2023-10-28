import React from 'react'
import Button from './Button'
import '../styles/Navbar.css'
import { FaCartPlus, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButton from '../navbar.js/CartButton'

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
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <div className='nav-btn flex btn'>
          <Button
            onClick={handleClick}
            redirectTo={'signin'}
            name='sign in'
            icon={<FaSignInAlt />}
          />
          {/* <Button
            className='btn btn-primary'
            onClick={handleClick}
            redirectTo={'cart'}
            name='cart'
            icon={<FaCartPlus />}
          /> */}

          <CartButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
