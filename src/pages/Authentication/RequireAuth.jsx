import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.inite';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    // const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation()
    if(loading){
        return <p>Loading...</p>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;