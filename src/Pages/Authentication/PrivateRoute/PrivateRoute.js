import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader';
import useAuth from '../../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <Loader />;
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
