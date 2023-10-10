import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, onClick }) => {
  return (
    <Link to={`/${children}`}>
      <button onClick={onClick} className='btn'>
        {children}
      </button>
    </Link>
  )
}

export default Button
