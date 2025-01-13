import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Hero from '../../components/hero/Hero';
import { StyledMainContainer } from '../../styles/common';
import { signInWithGithub } from '../../utils/auth-functions';

const Home = () => {
	return (
		<StyledMainContainer>
			<Hero />
			<h2>Un Camino Claro hacia el Éxito</h2>
			<img src='/assets/images/project-demo-1.jpg' alt='' />
			<p>
				Olvídate del caos de aprender al azar. Aquí te guiamos con retos
				organizados de forma progresiva, dándote una ruta para que domines cada
				concepto antes de pasar al siguiente nivel.
			</p>

			<h2>Construye proyectos reales</h2>
			<img src='/assets/images/project-demo-1.jpg' alt='' />
			<p>
				Aprender es importante, pero construir es lo que marca la diferencia.
				Aquí encontrarás proyectos diseñados para simular situaciones reales
			</p>
			<Link to='/challenges'>
				<Button>Ver Desafíos</Button>
			</Link>
			<h2>Mide tu progreso y comparte tus logros</h2>
			<img src='/assets/images/project-demo-1.jpg' alt='' />
			<p>
				Cada paso que das merece ser reconocido. Sigue tu evolución, completa
				desafíos y construye proyectos que te llenen de orgullo.
			</p>
			<Button action={signInWithGithub}>Comienza Aquí</Button>
		</StyledMainContainer>
	);
};

export default Home;
