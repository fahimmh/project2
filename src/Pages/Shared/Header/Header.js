/* This example requires Tailwind CSS v2.0+ */
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const navigation = [
  { name: 'Home', to: '/', current: false },
  { name: 'Services', to: '/allServices', current: false },
  { name: 'Workers', to: '/workers', current: false },
  { name: 'Contact Us', to: '/contactUs', current: false }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header () {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logOut, admin, savedUser } = useAuth()

  const handleLogOut = () => {
    logOut()
  }
  return (
    <Disclosure
      as='nav'
      className={
        location.pathname === '/workers' ? 'md:bg-transparent' : 'bg-blue-400'
      }
    >
      {({ open }) => (
        <div className={location.pathname === '/workers' && 'bg-gray-800'}>
          <div className='container mx-auto sm:px-6 lg:px-8 '>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden '>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-2'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              {/* logo */}
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  {/* <img className="block w-auto h-auto" src="" alt="logo" /> */}
                  <h4 className='text-white font-serif text-xl'>Easy Life</h4>
                </div>

                {/* large screen menu */}
                <div className='hidden sm:block sm:ml-6 m-auto'>
                  <div className='flex space-x-4'>
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-white hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* user info */}
              <div className='absolute z-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 '>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative '>
                  <div>
                    <Menu.Button className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white items-center'>
                      <span className='sr-only'>Open user menu</span>
                      {user.email ? (
                        <>
                          <p className='text-lg uppercase hidden lg:block mr-2'>
                            {savedUser.displayName}
                          </p>
                          {user.photoURL ? (
                            <img
                              className='h-8 w-8 rounded-full'
                              src={user.photoURL}
                              alt=''
                            />
                          ) : (
                            <FontAwesomeIcon
                              className='h-8 w-8 rounded-full'
                              icon={faUser}
                            />
                          )}
                        </>
                      ) : (
                        <Link
                          to='/login'
                          className='text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800'
                        >
                          Log In
                        </Link>
                      )}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    {/* profile items */}
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none '>
                      {user.email ? (
                        <>
                          <p className='text-sm text-center py-2 bg-green-300 rounded-t-md text-gray-600'>
                            Logged In as {savedUser.role}
                          </p>

                          <Menu.Item>
                            {({ active }) => (
                              <>
                                {savedUser.role === 'admin' && (
                                  <button
                                    onClick={() => navigate('/adminDashboard')}
                                    className='hover:bg-gray-100 text-gray-600 text-center w-full py-2'
                                  >
                                    Dashboard
                                  </button>
                                )}
                                {savedUser.role === 'user' && (
                                  <button
                                    onClick={() => navigate('/userDashboard')}
                                    className='hover:bg-gray-100 text-gray-600 text-center w-full py-2'
                                  >
                                    Dashboard
                                  </button>
                                )}
                                {savedUser.role === 'worker' && (
                                  <button
                                    onClick={() => navigate('/workerDashboard')}
                                    className='hover:bg-gray-100 text-gray-600 text-center w-full py-2'
                                  >
                                    Dashboard
                                  </button>
                                )}
                              </>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogOut}
                                className={classNames(
                                  active ? 'bg-red-100 ' : '',
                                  'block px-4 py-2 text-sm text-gray-700 w-full rounded-b-md'
                                )}
                              >
                                Log out
                              </button>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => navigate('/login')}
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700 w-full'
                              )}
                            >
                              Log In
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* mobile screen menu panel */}
          <Disclosure.Panel
            className={
              location.pathname === '/workers'
                ? 'sm:hidden  bg-gray-700 mb-20'
                : 'sm:hidden bg-gray-700'
            }
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {savedUser.role === 'admin' && (
                <Disclosure.Button
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  onClick={() => navigate('/adminDashboard')}
                >
                  Dashboard
                </Disclosure.Button>
              )}
              {savedUser.role === 'user' && (
                <Disclosure.Button
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  onClick={() => navigate('/userDashboard')}
                >
                  Dashboard
                </Disclosure.Button>
              )}
              {savedUser.role === 'worker' && (
                <Disclosure.Button
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                  onClick={() => navigate('/workerDashboard')}
                >
                  Dashboard
                </Disclosure.Button>
              )}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Header
