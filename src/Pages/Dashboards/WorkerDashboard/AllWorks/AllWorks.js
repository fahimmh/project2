import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function AllWorks() {
    const { works } = useAuth();
    const rows = [
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Salary',
        'Working Status',
        'Working Progress'
    ];
    return (
        <div>
            <Table cols={works} rows={rows} variant="works" />
        </div>
    );
}

export default AllWorks;
