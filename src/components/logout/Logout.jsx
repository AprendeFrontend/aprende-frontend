import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const Logout = () => {
	return <button onClick={logout}>Cerrar Sesión</button>;
};

const logout = async () => {
	await signOut(auth);
};

export default Logout;
