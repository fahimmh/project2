import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SuccessToasts from '../../../../components/SuccessToasts';
import Table from '../../../../components/Table';

function AdminWorkers() {
    const [workers, setWorkers] = useState([]);
    console.log(workers);
    const [workerUpdated, setWorkerUpdated] = useState(false);
    const { role } = useParams();
    useEffect(() => {
        setWorkerUpdated(false);
        fetch(`https://evening-sands-63384.herokuapp.com/workers/${role}`)
            .then((res) => res.json())
            .then((data) => setWorkers(data));
    }, [role, workerUpdated]);
    const rows = ['Name', 'Phone Number', 'E-mail', 'Experience', 'Skill', 'Action'];
    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={workerUpdated} setIsSuccess={setWorkerUpdated}>
                    Worker Deleted Successfully
                </SuccessToasts>
            </div>
            <Table
                rows={rows}
                cols={workers}
                setWorkerUpdated={setWorkerUpdated}
                variant="workersTable"
            />
        </div>
    );
}

export default AdminWorkers;
