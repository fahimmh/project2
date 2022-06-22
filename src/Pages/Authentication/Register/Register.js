import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Label from '../../../components/UnderlinedFieldLabel'
import useAuth from '../../../hooks/useAuth'
import src from '../../../images/login-register-bg.jpg'

function Register () {
  // use firebase
  const { registerUser, error, user, googleLogin } = useAuth()
  // states
  const [registerData, setRegisterData] = useState({})
  console.log(registerData)

  // navigate & location
  const navigate = useNavigate()
  const location = useLocation()

  const { password, confirmPassword, name, email } = registerData

  const handleBlur = e => {
    const field = e.target.name
    const { value } = e.target
    const newData = { ...registerData }
    newData[field] = value
    setRegisterData(newData)
  }
  console.log(user)

  const handleRegister = e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password does not matches')
    } else {
      registerUser(email, password, name, navigate, location)
    }
  }
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-800 w-screen h-screen flex items-center justify-center flex-col'>
      <div className='mb-10'>
        <button
          onClick={() => navigate('/')}
          className='mb-2 text-white text-4xl font-serif inline-block cursor-pointer'
        >
          Easy Life
        </button>
        <span className='h-1 w-3/4 bg-white block mx-auto' />
      </div>
      {/* inner container */}
      <div
        style={{
          background: `url(${src}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      >
        <div className='container grid grid-cols-3'>
          {/* navigation */}
          <div className='text-white flex flex-col items-center justify-between py-10 '>
            <div>
              <h3 className='text-3xl text-center'>
                Let&#39;s Start Our Journey
              </h3>
              <p className='text-center mt-3'>
                Sign up and Make your life easier
              </p>
              {/* goto register */}
            </div>
            <button
              onClick={() => navigate('/login')}
              className='text-white border-2 border-white rounded-full px-3 py-1 uppercase hover:bg-gradient-to-r from-cyan-500 to-blue-800 mb-20'
            >
              sign in
            </button>
          </div>

          {/* form */}
          <div className='md:my-auto col-span-2 bg-white p-20'>
            <h2 className='text-4xl text-center mb-8'>Sign Up</h2>
            <form className='' onSubmit={handleRegister}>
              <div className='my-5 relative z-0 '>
                <Input
                  variant='underlined'
                  onBlur={handleBlur}
                  name='name'
                  type='text'
                />
                <Label>Name</Label>
              </div>
              <div className='my-5 relative z-0 '>
                <Input
                  variant='underlined'
                  onBlur={handleBlur}
                  name='email'
                  type='email'
                />
                <Label>Email</Label>
              </div>
              <div className='my-5 relative z-0 '>
                <Input
                  variant='underlined'
                  name='password'
                  type='password'
                  onBlur={handleBlur}
                />
                <Label>Password</Label>
              </div>
              <div className='my-5 relative z-0 '>
                <Input
                  variant='underlined'
                  name='confirmPassword'
                  type='password'
                  onBlur={handleBlur}
                />
                <Label>Confirm Password</Label>
              </div>

              <Button variant='auth' type='submit'>
                Sign UP Now
              </Button>

              {error && (
                <p className='py-1 bg-red-400 text-white text-center mt-1 rounded-md'>
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
