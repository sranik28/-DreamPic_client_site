import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useAuthGlobally } from '../context/AuthProvider';



const PrivateRouter = ({ children }) => {
    const { loading, user } = useAuthGlobally()
    const location = useLocation();
    if (loading) {
        return <Loader />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;