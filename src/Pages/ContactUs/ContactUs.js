import {
  faEnvelope,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import SuccessToasts from '../../components/SuccessToasts'
import Title from '../../components/Title'
import useAuth from '../../hooks/useAuth'
import src from '../../images/contactus/Contactus.svg'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'

function ContactUs () {
  const [data, setData] = useState({})
  const [success, setSuccess] = useState(false)
  const { setIsMessageSent, savedUser } = useAuth()
  console.log(data)
  const handleChange = e => {
    const field = e.target.name
    const { value } = e.target
    const newData = { ...data }
    newData[field] = value
    setData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch('https://evening-sands-63384.herokuapp.com/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          setIsMessageSent(true)
          setSuccess(true)
        }
      })
    e.target.reset()
  }
  return (
    <>
      {/* header */}
      <Header />
      {/* body */}
      <div className='h-full container mx-auto my-20'>
        <Title classes='mb-5 '>Contact Us</Title>
        <div className='grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-0'>
          <div>
            <img src={src} alt='' />
          </div>
          <div className='my-auto relative'>
            {/* success toast */}
            <div className='absolute left-[28%] top-[30%]'>
              <SuccessToasts isSuccess={success} setIsSuccess={setSuccess}>
                Message Sent Successfully{' '}
              </SuccessToasts>
            </div>
            {/* contact form */}
            <form onSubmit={handleSubmit}>
              <div className='mb-2'>
                <Input
                  variant='outlined'
                  placeholder='Name'
                  name='name'
                  type='text'
                  onChange={handleChange}
                />
              </div>
              <div className='mb-2'>
                <Input
                  variant='outlined'
                  placeholder='Email'
                  name='email'
                  type='email'
                  onChange={handleChange}
                />
              </div>
              <textarea
                rows='4'
                name='message'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-700 mb-2'
                placeholder='Message'
                required
                onChange={handleChange}
              />
              {savedUser.role === 'user' ? (
                <Button type='submit' variant='outlined'>
                  Send
                </Button>
              ) : (
                <Button disabled type='submit' variant='outlined'>
                  Send
                </Button>
              )}
            </form>
            {/* other contacts */}
            <div className='flex flex-col items-center lg:items-start lg:mt-5'>
              <h3 className='text-2xl mb-1'>Send us a message</h3>
              <p className='mb-4'>Our customer care is open 24/7</p>
              {/* LOcation */}
              <div className='flex items-center gap-3 mb-2'>
                <div>
                  <FontAwesomeIcon className='text-2xl' icon={faLocationDot} />
                </div>
                <div>
                  <h4 className='text-xl'>Address</h4>
                  Dhaka, Bangladesh
                </div>
              </div>
              {/* email */}
              <div className='flex items-center gap-3 mb-2'>
                <div>
                  <FontAwesomeIcon className='text-2xl' icon={faEnvelope} />
                </div>
                <div>
                  <h4 className='text-xl'>Email Address</h4>
                  easylife@web.com
                </div>
              </div>
              {/* phone */}
              <div className='flex items-center gap-3 mb-2'>
                <div>
                  <FontAwesomeIcon className='text-2xl' icon={faPhone} />
                </div>
                <div>
                  <h4 className='text-xl'>Phone Number</h4>
                  01304591910
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  )
}

export default ContactUs
