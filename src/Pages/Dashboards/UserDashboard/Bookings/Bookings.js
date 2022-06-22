import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function Bookings() {
    const { user, bookings } = useAuth();
    console.log(user);
    const navigate = useNavigate();
    const rows = [
        'Worker Name',
        'Worker Phone',
        'Worker Category',
        'Working Status',
        'Working Progress'
    ];
    return (
        <div>
            <Table cols={bookings} rows={rows} variant="bookingsTable" />
        </div>
    );
}

export default Bookings;
