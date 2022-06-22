import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function CurrentWorks() {
    const { user, currentWorks } = useAuth();

    console.log(currentWorks);
    const rows = [
        'Customer Name',
        'Customer Email',
        'Customer Phone',
        'Working Status',
        'Working Progress',
        'Cost',
        'Actions'
    ];
    return (
        <div>
            <Table variant="currentWorks" rows={rows} cols={currentWorks} />
        </div>
    );
}

export default CurrentWorks;
