import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Button from '../button/Button';
import Login from '../login/Login';

const Hero = () => {
	const { areUser, username, saveDatabaseUserInfo } = useContext(AuthContext);
	return (
		<div>
			{!areUser && (
				<>
					<h1>Aprende Frontend Paso a Paso</h1>
					<p>
						Paso a paso, proyecto a proyecto. Aquí no solo aprendes, construyes.
						Mejora tus habilidades mientras creas proyectos para tu portfolio.
					</p>
					<Login>Empieza tu aprendizaje</Login>
				</>
			)}
			{areUser && (
				<>
					<h1>¡Hola de nuevo, {username}!</h1>
					<p>
						Continúa tu aventura, resuelve nuevos retos y sigue acumulando
						puntos. Recuerda que nuestra comunidad en Discord está aquí para
						ayudarte.
					</p>
					<Link to='/profile'>
						<Button>Ir a tu perfil</Button>
					</Link>
				</>
			)}
		</div>
	);
};

export default Hero;
