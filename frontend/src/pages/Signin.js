import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Footer from '../components/shared/Footer'


const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    register,
    formState: { errors },
  } = useForm()

  const handleSubmit = async (e) => {
    console.log('signed in')
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <>
      <div className='container flex-center'>
        <div className='form-container flex-center'>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-control-container'>
              <div className='form-control'>
                <label>Email</label>
                <input
                  className='input'
                  onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  name='email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Email is not valid',
                    },
                  })}
                />

                {errors.email && (
                  <p className='errorMsg'>{errors.email.message}</p>
                )}
              </div>
              <div className='form-control'>
                <label>Password</label>
                <input
                  className='input'
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  name='password'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password should be at-least 6 characters.',
                    },
                  })}
                />
                {errors.password && (
                  <p className='errorMsg'>{errors.password.message}</p>
                )}
              </div>
              <div className='form-control'>
                <button type='submit' className='btn form-btn'>
                  Login
                </button>
              </div>
            </div>
          </form>
          <p>
            Don't have Account
            <Link to={'/signup'}>Create One</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin
