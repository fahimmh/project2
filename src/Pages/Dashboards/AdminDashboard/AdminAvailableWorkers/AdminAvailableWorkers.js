import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function AdminAvailableWorkers() {
    const { availableWorkers, setWorkingStatus } = useAuth();
    console.log(availableWorkers);
    const rows = ['Name', 'Catagories', 'Phone Number', 'Action'];

    return (
        <div>
            <Table
                rows={rows}
                cols={availableWorkers}
                variant="availableWorkers"
                setWorkingStatus={setWorkingStatus}
            />
        </div>
    );
}

export default AdminAvailableWorkers;
