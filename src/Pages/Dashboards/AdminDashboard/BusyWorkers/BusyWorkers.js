import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function BusyWorkers() {
    const { busyWorkers, setWorkingStatus } = useAuth();

    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];
    return (
        <div>
            <Table
                rows={rows}
                cols={busyWorkers}
                variant="busyWorkers"
                setWorkingStatus={setWorkingStatus}
            />
        </div>
    );
}

export default BusyWorkers;
