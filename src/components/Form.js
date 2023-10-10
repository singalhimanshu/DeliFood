import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Form() {
  // States for registration
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value)
    setSubmitted(false)
  }

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false)
  }

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false)
  }

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      setError(true)
    } else {
      setSubmitted(true)
      setError(false)
    }
  }

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className='success'
        style={{
          display: submitted ? '' : 'none',
        }}
      >
        <p>User {name} successfully registered!!</p>
      </div>
    )
  }

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className='error'
        style={{
          display: error ? '' : 'none',
        }}
      >
        <p>Please enter all the fields</p>
      </div>
    )
  }

  return (
    <div className='form'>
      <div>
        <h3>User Registration</h3>
      </div>

      {/* Calling to the methods */}
      <div className='messages'>
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}

        <input
          onChange={handleName}
          className='input'
          placeholder='enter your name..'
          value={name}
          type='text'
        />

        <label className='label'>Email</label>
        <input
          onChange={handleEmail}
          className='input'
          placeholder='Email'
          value={email}
          type='email'
        />

        <label className='label'>Password</label>
        <input
          onChange={handlePassword}
          className='input'
          placeholder='password'
          value={password}
          type='password'
        />

        <button onClick={handleSubmit} className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
