import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { signInWithGithub } from '../../utils/auth-functions';
import Button from '../button/Button';

const Login = () => {
	const { saveDatabaseUserInfo } = useContext(AuthContext);
	return (
		<Button action={() => signInWithGithub(saveDatabaseUserInfo)}>
			Inicia Sesión
		</Button>
	);
};

export default Login;
