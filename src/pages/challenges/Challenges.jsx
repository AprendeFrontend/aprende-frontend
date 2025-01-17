import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHALLENGES } from '../../constants/challenges';
import { CHALLENGES_VALUES } from '../../constants/state-constants';
import { StyledMainContainer } from '../../styles/common';

const Challenges = () => {
	const [level, setLevel] = useState(CHALLENGES_VALUES.TRAINEE);
	const [technology, setTechnology] = useState(CHALLENGES_VALUES.HTML_CSS);

	return (
		<StyledMainContainer>
			<h1>Desafios</h1>
			<button onClick={() => setLevel(CHALLENGES_VALUES.TRAINEE)}>
				Aprendiz
			</button>
			<button onClick={() => setLevel(CHALLENGES_VALUES.JUNIOR)}>Junior</button>
			<button onClick={() => setLevel(CHALLENGES_VALUES.MIDDLE)}>Medio</button>
			<button onClick={() => setLevel(CHALLENGES_VALUES.ADVANCED)}>
				Avanzado
			</button>
			{CHALLENGES[technology][level].map(challenge => (
				<Link
					key={challenge.id}
					// to={`/challenge/${level}/${technology}/${challenge.id}`}
				>
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
