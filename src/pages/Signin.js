import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <p>Signin Page</p>
      <div className='form-page flex-center'>
        <div className='form-container flex-center'>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control-container'>
              <div className='form-control'>
                <label>Email</label>
                <input
                  className='input'
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
                <button type='submit' className='form-btn'>
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
    </>
  )
}

export default Signin
