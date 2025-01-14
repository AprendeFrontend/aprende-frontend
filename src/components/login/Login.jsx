import Button from '../button/Button';

const Login = ({ children = 'Inicia Sesion' }) => {
	// return <Button action={signInWithGithub}>{children}</Button>;
	return <Button>{children}</Button>;
};

export default Login;
