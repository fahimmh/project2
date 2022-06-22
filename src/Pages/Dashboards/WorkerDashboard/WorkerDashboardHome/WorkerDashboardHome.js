import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';

function WorkerDashboardHome() {
    const { workRequests, currentWorks, completedWorks } = useAuth();
    console.log(workRequests);
    const stats = [
        {
            id: 2,
            about: 'Customers',
            total: 0,
            icon: faUser,
            iconColor: 'text-blue-400',
            bgColor: 'yellow'
        },
        {
            id: 3,
            about: 'Request Send',
            total: workRequests?.length || 0,
            icon: faEnvelope,
            iconColor: 'text-blue-400',
            bgColor: 'pink'
        },
        {
            id: 4,
            about: 'Currently Working',
            total: currentWorks?.length || 0,
            icon: faHome,
            iconColor: 'text-blue-400',
            bgColor: 'red'
        },
        {
            id: 5,
            about: 'Work Completed',
            total: completedWorks || 0,
            icon: faHome,
            iconColor: 'text-blue-400',
            bgColor: 'green'
        }
    ];
    return (
        <div className="mr-2">
            <div className="grid grid-cols-3 gap-2 w-full">
                {stats.map((state) => (
                    <div
                        key={state.id}
                        className={`shadow-lg w-full flex items-center p-4 justify-between bg-${state.bgColor}-400`}
                    >
                        <div>
                            <p className="text-center text-3xl">{state.total}</p>
                            <h4 className="text-2xl">{state.about}</h4>
                        </div>
                        <FontAwesomeIcon
                            className={`text-5xl ml-3 ${state.iconColor}`}
                            icon={state.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkerDashboardHome;
