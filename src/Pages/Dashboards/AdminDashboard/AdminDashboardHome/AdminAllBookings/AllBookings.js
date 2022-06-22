import React, { useEffect, useState } from 'react';
import Table from '../../../../../components/Table';

function AdminAllBookings() {
    const [hiredWorkers, setHiredWorkers] = useState([]);
    console.log(hiredWorkers);
    useEffect(() => {
        fetch('https://evening-sands-63384.herokuapp.com/allHiredWorkers')
            .then((res) => res.json())
            .then((data) => setHiredWorkers(data));
    }, []);
    const rows = [
        'Customers Name',
        'Customers E-mail',
        'Workers Name',
        'Workers E-mail',
        'Categories',
        'Status'
    ];

    return (
        <div className="">
            <div className="flex flex-col mt-5">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <Table rows={rows} cols={hiredWorkers} variant="bookingStatus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAllBookings;
