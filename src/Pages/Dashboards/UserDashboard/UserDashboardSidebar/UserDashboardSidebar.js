import {
    faAnglesUp,
    faArrowRightFromBracket,
    faChartLine,
    faEnvelope,
    faHelmetSafety,
    faUser,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

function UseruserDashboardSidebar({ closeSidebar }) {
    // hooks
    const navigate = useNavigate();
    const { user } = useAuth();
    const [showServices, setShowServices] = useState(false);
    const [showWorkers, setShowWorkers] = useState(false);

    // sidebar navs
    const navs = [
        { id: 1, nav: 'Hired', link: '/userDashboard/hired', icon: faUsers },
        { id: 2, nav: 'Request Pending', link: '/userDashboard/requestPending', icon: faAnglesUp },
        { id: 3, nav: 'Became Worker', link: '/userDashboard/became-worker', icon: faHelmetSafety },
        { id: 4, nav: 'Post ToLet', link: '/userDashboard/post-toLet', icon: faEnvelope }
    ];

    return (
        <div>
            <aside className={closeSidebar ? 'w-64' : 'hidden'} aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <div className="flex items-center justify-center my-2">
                        <FontAwesomeIcon className="text-2xl" icon={faUser} />
                        <p className="uppercase ml-1 text-2xl">user</p>
                    </div>

                    <ul className="space-y-2">
                        {/* userDashboard */}
                        <li>
                            <Link
                                to="/userDashboard"
                                href="#"
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <FontAwesomeIcon
                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    icon={faChartLine}
                                />

                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>

                        {navs.map((nav) => (
                            <li key={nav.id}>
                                <Link
                                    to={nav.link}
                                    href="#"
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <FontAwesomeIcon
                                        className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        icon={nav.icon}
                                    />

                                    <span className="ml-3">{nav.nav}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                    >
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />{' '}
                        <span className="ml-5">Log Out</span>
                    </button>
                </div>
            </aside>
        </div>
    );
}

export default UseruserDashboardSidebar;
