import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import { signInWithGithub } from '../../utils/auth-functions';
import Button from '../button/Button';

const Hero = () => {
	const { areUser, username } = useContext(AuthContext);
	return (
		<div>
			{!areUser && (
				<>
					<h1>Aprende Frontend Paso a Paso.</h1>
					<p>
						Domina el desarrollo frontend con retos diseñados en el orden
						correcto y ajustados a tu nivel. Aquí no saltamos pasos, ¡evoluciona
						de principiante a experto de forma efectiva!
					</p>
					<Button action={signInWithGithub}>
						Empieza tu aprendizaje ahora
					</Button>
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
