import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Footer from '../components/shared/Footer'

const initialState = {
  username: '',
  email: '',
  password: '',
}

const Signup = () => {
  const [userData, setUserData] = useState(initialState)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const registerUser = async (currentUser) => {

    try {
      const response = await fetch('http://localhost:8080/api/user/register', {
        method: 'POST',
        body: JSON.stringify(currentUser),
        headers: {
          'Content-type': 'application/json',
        },
      })
      const { user, token } = await response.json()
      addUserToLocalStorage({ user, token })
      console.log(user, token)
      if (user) {
        navigate('/signin')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    // e.preventDefault()
    const { username, email, password } = userData
    // console.log(`username : ${userData.username}`)
    console.log(username)
    const currentUser = { username, email, password }

    registerUser(currentUser)
  }

  const resetInput = (e) => {
    setUserData({ ...userData, [e.target.name]: '' })
  }

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
                  value={userData.name}
                  onChange={onHandleChange}
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
                  value={userData.email}
                  onChange={onHandleChange}
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
                  onChange={onHandleChange}
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
