import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader';
import useAuth from '../../../hooks/useAuth';

function WorkerRoute({ children, ...rest }) {
    const { savedUser, adminLoading, user } = useAuth();
    const location = useLocation();
    if (adminLoading) {
        return <Loader />;
    }
    if (savedUser.role === 'worker' && user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default WorkerRoute;
