import React from 'react';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function Customers() {
    const { customers } = useAuth();
    const rows = ['Name', 'Email'];
    return (
        <div>
            <Table rows={rows} cols={customers} variant="customers" />
        </div>
    );
}

export default Customers;
