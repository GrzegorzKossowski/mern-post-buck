import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteProps {
    toLogin?: boolean;
}

const PrivateRoute = ({ toLogin, ...restProps }: PrivateRouteProps) => {
    const { userInfo } = useSelector((state: RootState) => state.auth);
    if (userInfo) return <Outlet />;
    return toLogin ? <Navigate to='/' replace /> : null;
};

export default PrivateRoute;
