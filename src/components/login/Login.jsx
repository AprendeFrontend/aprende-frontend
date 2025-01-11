import { signInWithGithub } from '../../utils/auth-functions';
import Button from '../button/Button';

const Login = () => {
	return <Button action={signInWithGithub}>Inicia Sesión</Button>;
};

export default Login;
