import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Label from '../../../components/UnderlinedFieldLabel'
import useAuth from '../../../hooks/useAuth'
import src from '../../../images/login-register-bg.jpg'

function Login () {
  // usefirebase
  const { login, error, googleLogin } = useAuth()
  // navigate & location
  const navigate = useNavigate()
  const location = useLocation()

  // states
  const [loginData, setLoginData] = useState({})
  const { email, password } = loginData

  // handlers
  const handleBlur = e => {
    const field = e.target.name
    const { value } = e.target
    const newData = { ...loginData }
    newData[field] = value
    setLoginData(newData)
  }
  const handleLogin = e => {
    e.preventDefault()
    login(email, password, location, navigate)
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
        {/* body */}

        <div className='container grid grid-cols-3'>
          <div className='md:my-auto col-span-2 bg-white p-20'>
            <h2 className='text-4xl text-center mb-8'>Sign In</h2>

            <form className='' onSubmit={handleLogin}>
              <div className='my-5 relative z-0 '>
                <Input
                  variant='underlined'
                  onBlur={handleBlur}
                  name='email'
                  type='email'
                />
                <Label>Email address or phone number</Label>
              </div>
              <div className='mb-3 relative z-0'>
                <Input
                  variant='underlined'
                  onBlur={handleBlur}
                  name='password'
                  type='password'
                />
                <Label>password</Label>
              </div>

              <Button type='submit' variant='auth'>
                Sign In
              </Button>

              <div className='flex items-center justify-center'>
                <p className='text-center my-5 mr-5'>Or,</p>
                {/* google login */}
                <div className='text-center text-xl bg-orange-300 text-white py-2 rounded-lg mt-1 px-5'>
                  <button onClick={() => googleLogin(location, navigate)}>
                    Login With google{' '}
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className='text-blue-500'
                    />
                  </button>
                </div>
              </div>

              {error && (
                <p className='py-1 bg-red-400 text-white text-center mt-1 rounded-md'>
                  {error}
                </p>
              )}
            </form>
          </div>

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
              onClick={() => navigate('/register')}
              className='text-white border-2 border-white rounded-full px-3 py-1 uppercase hover:bg-gradient-to-r from-cyan-500 to-blue-800 mb-20'
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
