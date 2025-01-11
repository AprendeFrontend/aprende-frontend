import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth.context';

const ProtectedRoute = () => {
	const { areUser, loading } = useContext(AuthContext);

	if (loading) return <h1>Loading...</h1>;

	if (!areUser) return <Navigate to='/' replace />;

	return <Outlet />;
};

export default ProtectedRoute;
