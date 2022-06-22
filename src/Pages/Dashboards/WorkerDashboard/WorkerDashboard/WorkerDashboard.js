import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import WorkerDashboardSidebar from '../WorkerDashboardSidebar/WorkerDashboardSidebar';

function WorkerDashboard() {
    const [closeSidebar, setCloseSidebar] = useState(false);
    const location = useLocation();
    const { user } = useAuth();
    return (
        <div className="flex">
            <WorkerDashboardSidebar closeSidebar={closeSidebar} />
            <div className="ml-3 w-full ">
                <div className="flex w-full shadow-md py-3 px-2 ">
                    <svg
                        onClick={() =>
                            closeSidebar ? setCloseSidebar(false) : setCloseSidebar(true)
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                    <h2 className="text-3xl mx-auto uppercase">
                        {location.pathname.split('/')[2] || location.pathname.split('/')[1]}
                    </h2>
                    {/* user */}
                    <div className="flex flex-row-reverse items-center">
                        {user.photoURL ? (
                            <img className="w-8 h-8 ml-2" src={user.photoURL} alt="" />
                        ) : (
                            <FontAwesomeIcon className="w-8 h-8 ml-2" icon={faUser} />
                        )}
                        <h2>{user.displayName}</h2>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
}

export default WorkerDashboard;
