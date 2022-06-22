import {
  faAnglesUp,
  faArrowRightFromBracket,
  faBolt,
  faBuilding,
  faBusinessTime,
  faChartLine,
  faEnvelope,
  faFaucet,
  faHouseUser,
  faList,
  faPlus,
  faUser,
  faUserCheck,
  faUserPlus,
  faUsers,
  faUserSecret,
  faUtensils
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

function AdminadminDashboardSidebar ({ closeSidebar }) {
  // hooks
  const navigate = useNavigate()
  const { user } = useAuth()
  const [showServices, setShowServices] = useState(false)
  const [showWorkers, setShowWorkers] = useState(false)

  // sidebar navs
  const navs = [
    {
      id: 1,
      nav: 'Make Admin',
      link: '/adminDashboard/make-admin',
      icon: faAnglesUp
    },
    {
      id: 2,
      nav: 'Customers',
      link: '/adminDashboard/customers',
      icon: faUsers
    },
    {
      id: 3,
      nav: 'Customers Messages',
      link: '/adminDashboard/messages',
      icon: faUsers
    },
    {
      id: 4,
      nav: 'Worker Requests',
      link: '/adminDashboard/worker-requests',
      icon: faEnvelope
    },
    {
      id: 5,
      nav: 'ToLet Requests',
      link: '/adminDashboard/toLet-requests',
      icon: faEnvelope
    },
    {
      id: 6,
      nav: 'Available Workers',
      link: '/adminDashboard/available-workers',
      icon: faUserCheck
    },
    {
      id: 7,
      nav: 'Busy Workers',
      link: '/adminDashboard/busy-workers',
      icon: faBusinessTime
    }
  ]

  const services = [
    {
      id: 1,
      nav: 'Electrician Services',
      link: '/adminDashboard/services/electricianService',
      icon: faBolt
    },
    {
      id: 2,
      nav: 'Plumber Services',
      link: '/adminDashboard/services/plumberService',
      icon: faFaucet
    },
    {
      id: 3,
      nav: 'Chef Services',
      link: '/adminDashboard/services/chefService',
      icon: faUtensils
    },
    {
      id: 4,
      nav: 'To-Let',
      link: '/adminDashboard/services/toLetService',
      icon: faBuilding
    },
    {
      id: 5,
      nav: 'Add New Service',
      link: '/adminDashboard/add-service',
      icon: faPlus
    }
  ]
  const workers = [
    {
      id: 1,
      nav: 'Electricians',
      link: '/adminDashboard/workers/electrician',
      icon: faUser
    },
    {
      id: 2,
      nav: 'Plumbers',
      link: '/adminDashboard/workers/plumber',
      icon: faUser
    },
    { id: 3, nav: 'Chefs', link: '/adminDashboard/workers/chef', icon: faUser },
    {
      id: 4,
      nav: 'To-Lets',
      link: '/adminDashboard/workers/toLets',
      icon: faUser
    },
    {
      id: 5,
      nav: 'Post ToLet',
      link: '/adminDashboard/post-toLet',
      icon: faHouseUser
    },
    {
      id: 6,
      nav: 'Add New Worker',
      link: '/adminDashboard/add-worker',
      icon: faUserPlus
    }
  ]
  return (
    <div>
      <aside className={closeSidebar ? 'w-64' : 'hidden'} aria-label='Sidebar'>
        <div className='overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800'>
          <div className='flex items-center justify-center my-2'>
            <FontAwesomeIcon className='text-2xl' icon={faUserSecret} />
            <p className='uppercase ml-1 text-2xl'>admin</p>
          </div>

          <ul className='space-y-2'>
            {/* adminDashboard */}
            <li>
              <Link
                to='/adminDashboard'
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <FontAwesomeIcon
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  icon={faChartLine}
                />

                <span className='ml-3'>Dashboard</span>
              </Link>
            </li>

            {/* services */}
            <li>
              <button
                onClick={() =>
                  showWorkers ? setShowWorkers(false) : setShowWorkers(true)
                }
                type='button'
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              >
                <svg
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  />
                </svg>
                <span
                  className='flex-1 ml-3 text-left whitespace-nowrap'
                  sidebar-toggle-item
                >
                  Services
                </span>
                <svg
                  sidebar-toggle-item
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <ul className={showWorkers ? 'block pl-5' : 'hidden'}>
                {services.map(service => (
                  <li key={service.id}>
                    <Link
                      to={service.link}
                      href='#'
                      className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <FontAwesomeIcon
                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                        icon={service.icon}
                      />

                      <span className='ml-3'>{service.nav}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* workers */}
            <li>
              <button
                onClick={() =>
                  showServices ? setShowServices(false) : setShowServices(true)
                }
                type='button'
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              >
                <FontAwesomeIcon
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  icon={faList}
                />

                <span
                  className='flex-1 ml-3 text-left whitespace-nowrap'
                  sidebar-toggle-item
                >
                  Workers
                </span>
                <svg
                  sidebar-toggle-item
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <ul className={showServices ? 'block pl-5' : 'hidden'}>
                {workers.map(worker => (
                  <li key={worker.id}>
                    <Link
                      to={worker.link}
                      href='#'
                      className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    >
                      <FontAwesomeIcon
                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                        icon={worker.icon}
                      />

                      <span className='ml-3'>{worker.nav}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navs.map(nav => (
              <li key={nav.id}>
                <Link
                  to={nav.link}
                  href='#'
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  <FontAwesomeIcon
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    icon={nav.icon}
                  />

                  <span className='ml-3'>{nav.nav}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate('/')}
            className='flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full'
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />{' '}
            <span className='ml-5'>Log Out</span>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default AdminadminDashboardSidebar
