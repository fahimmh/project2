import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SuccessToasts from '../../../../components/SuccessToasts';
import Table from '../../../../components/Table';

function AdminServices() {
    const { type } = useParams();
    const [services, setServices] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);
    useEffect(() => {
        setIsDeleted(false);
        fetch(`https://evening-sands-63384.herokuapp.com/services/${type}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [type, isDeleted]);
    const rows = ['Name', 'Category', 'actions'];

    console.log(services);
    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={isDeleted} setIsSuccess={setIsDeleted}>
                    Service Deleted Successfully
                </SuccessToasts>
            </div>
            <Table
                setIsDeleted={setIsDeleted}
                rows={rows}
                cols={services}
                variant="adminServices"
            />
        </div>
    );
}

export default AdminServices;
