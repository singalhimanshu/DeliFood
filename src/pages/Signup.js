import React from 'react'
import Form from '../components/Form'
import Signin from './Signin'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      Signup
      <div className='sign-in-page'>
        <Link to='/signin'>Already Have Account, Log in</Link>
      </div>
    </div>
  )
}

export default Signup
