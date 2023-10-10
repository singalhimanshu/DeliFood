import React, { useState } from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Signin = () => {
  return (
    <div className='sign-in-page'>
      <p>Signin Page</p>

      <p>
        Don't have Account
        <Link to={'/signup'}>Create One</Link>
      </p>
    </div>
  )
}

export default Signin
