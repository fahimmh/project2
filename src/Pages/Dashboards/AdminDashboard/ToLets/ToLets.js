import React from 'react';
import SuccessToasts from '../../../../components/SuccessToasts';
import Table from '../../../../components/Table';
import useAuth from '../../../../hooks/useAuth';

function ToLets() {
    const { toLets, setToLetUpdated, toLetUpdated } = useAuth();
    const rows = ['Owner Name', 'Location', 'Phone Number', 'House Type', 'Rent', 'Actions'];

    return (
        <div>
            <div className="absolute top-[25%] right-[25%]">
                <SuccessToasts isSuccess={toLetUpdated} setIsSuccess={setToLetUpdated}>
                    ToLet Deleted Successfully
                </SuccessToasts>
            </div>
            <Table rows={rows} cols={toLets} variant="toLets" setToLetUpdated={setToLetUpdated} />
        </div>
    );
}

export default ToLets;
