import React, { Children, use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './context/AuthContext';
import useAuth from './hooks/useAuth';


const PrivateRout = ({children}) => {
    const {user,loading}= useAuth();

    const location= useLocation()
    
    // console.log(location)

    if(loading){
        return <span><span className="loading loading-spinner text-success"></span></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>;
};

export default PrivateRout;