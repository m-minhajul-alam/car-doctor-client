import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;