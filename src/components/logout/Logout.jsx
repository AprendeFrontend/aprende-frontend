import { logout } from '../../utils/auth-functions';

const Logout = () => {
	return <button onClick={logout}>Cerrar Sesión</button>;
};

export default Logout;
