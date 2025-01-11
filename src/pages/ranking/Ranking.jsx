import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import RankedUser from '../../components/ranked-user/RankedUser';
import { usersCollectionReference } from '../../config/firebase.config';
import { StyledMainContainer } from '../../styles/common';

const Ranking = () => {
	const [ranking, setRanking] = useState([]);

	console.log(ranking);

	useEffect(() => {
		const subscribeToData = onSnapshot(usersCollectionReference, snapshot => {
			getAllUsers(snapshot, setRanking);
		});

		return () => subscribeToData();
	}, []);

	if (ranking.length === 0) {
		return (
			<StyledMainContainer>
				<h1>Cargando Clasificación...</h1>
			</StyledMainContainer>
		);
	}

	return (
		<StyledMainContainer>
			<h1>Ranking</h1>
			{ranking.map(user => (
				<RankedUser key={user.id} {...user} />
			))}
		</StyledMainContainer>
	);
};

const getAllUsers = async (snapshot, setRanking) => {
	const { docs } = snapshot;
	const users = docs.map(doc => ({ id: doc.id, ...doc.data() }));
	setRanking(users);
};

export default Ranking;
