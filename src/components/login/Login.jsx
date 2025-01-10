import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../../config/firebase.config';

const Login = () => {
	return <button onClick={signInWithGithub}>INICIAR SESIÓN</button>;
};

const signInWithGithub = async () => {
	try {
		const provider = new GithubAuthProvider();
		await signInWithPopup(auth, provider);
	} catch (error) {
		console.error(error);
	}
};

export default Login;
