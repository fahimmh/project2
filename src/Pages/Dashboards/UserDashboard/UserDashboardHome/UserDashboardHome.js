import { faEnvelope, faHome, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

function UserDashboardHome() {
    const { bookings, requestPending, user } = useAuth();
    const [toLets, setToLets] = useState([]);
    console.log(toLets);
    console.log(bookings, requestPending);

    useEffect(() => {
        fetch(`https://evening-sands-63384.herokuapp.com/toLets?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setToLets(data));
    }, [user.email]);
    const stats = [
        {
            id: 2,
            about: 'Hired workers',
            total: bookings?.length || 0,
            icon: faUserGear,
            iconColor: 'text-white',
            bgColor: 'green'
        },
        {
            id: 3,
            about: 'Workers Request',
            total: requestPending?.length || 0,
            icon: faEnvelope,
            iconColor: 'text-white',
            bgColor: 'yellow'
        },
        {
            id: 4,
            about: 'To-Lets posted',
            total: toLets?.length || 0,
            icon: faHome,
            iconColor: 'text-white',
            bgColor: 'pink'
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

export default UserDashboardHome;
