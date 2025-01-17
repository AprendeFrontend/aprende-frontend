import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHALLENGES } from '../../constants/challenges';
import { StyledMainContainer } from '../../styles/common';

const Challenges = () => {
	const [level, setLevel] = useState(0);

	return (
		<StyledMainContainer>
			<h1>Desafios</h1>
			<button onClick={() => setLevel(0)}>Aprendiz</button>
			<button onClick={() => setLevel(1)}>Junior</button>
			<button onClick={() => setLevel(2)}>Medio</button>
			<button onClick={() => setLevel(3)}>Avanzado</button>
			{CHALLENGES[level].map(challenge => (
				<Link key={challenge.id} to={`/challenge/${level}/${challenge.id}`}>
					<div>
						<h2>{challenge.name}</h2>
						<img src={challenge.image} alt='' />
						<p>{challenge.description}</p>
						<span>{challenge.requirements}</span>
					</div>
				</Link>
			))}
		</StyledMainContainer>
	);
};

export default Challenges;
