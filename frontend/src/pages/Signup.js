import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Footer from '../components/shared/Footer'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const resetInput = () => {}

  return (
    <>
      <div className='container flex-center'>
        <div className='form-container  flex-center'>
          <h2>Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control-container'>
              <div className='form-control'>
                <label className='labelline'>Username</label>
                <input
                  className='my-input'
                  type='text'
                  name='username'
                  {...register('username', {
                    required: 'username is Required!!!',
                  })}
                />
                <p className='error'>
                  {errors.username && <p>{errors.username.message}</p>}
                </p>
              </div>
              <div className='form-control'>
                <label className='labelline'>Email</label>
                <input
                  className='my-input'
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
                <p className='error'>
                  {errors.email && (
                    <p className='errorMsg'>{errors.email.message}</p>
                  )}
                </p>
              </div>
              <div className='form-control'>
                <label className='labelline'>Password</label>
                <input
                  className='my-input'
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
                <p className='error'>
                  {errors.password && (
                    <p className='errorMsg'>{errors.password.message}</p>
                  )}
                </p>
              </div>
              <div className='form-control'>
                <button
                  type='submit'
                  className='form-btn btn'
                  onClick={resetInput}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
          <p>
            <Link to='/signin'>Already Have Account, Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup
