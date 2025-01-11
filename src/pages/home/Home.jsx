import Hero from '../../components/hero/Hero';
import { StyledMainContainer } from '../../styles/common';

const Home = () => {
	return (
		<StyledMainContainer>
			<Hero />
			<h2>Un Camino Claro hacia el Éxito</h2>
			<p>
				Olvídate del caos de aprender al azar. Aquí te guiamos con retos
				organizados de forma progresiva, asegurándonos de que domines cada
				concepto antes de pasar al siguiente nivel.
			</p>
			<h2>Aprende sin Abrumarte</h2>
			<p>
				Cada reto está diseñado para estar dentro de tu capacidad actual. Ni
				demasiado fácil ni fuera de tu alcance, solo el equilibrio perfecto para
				mantenerte motivado y aprendiendo.
			</p>
			<h2>Desarrolla Habilidades Reales.</h2>
			<p>
				Aquí no se trata de hacer ejercicios sin sentido. Cada reto tiene un
				propósito claro, preparándote para resolver problemas reales y construir
				proyectos que realmente importen.
			</p>
		</StyledMainContainer>
	);
};

export default Home;
