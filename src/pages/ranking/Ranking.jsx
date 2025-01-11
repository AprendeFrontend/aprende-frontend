import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { usersCollectionReference } from '../../config/firebase.config';

const Ranking = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		const subscribeToData = onSnapshot(usersCollectionReference, snapshot => {
			getAllUsers(snapshot, setUsers);
		});

		return () => subscribeToData();
	}, []);
	return <h1>Ranking</h1>;
};

const getAllUsers = async (snapshot, setUsers) => {
	const { docs } = snapshot;
	const users = docs.map(doc => ({ id: doc.id, ...doc.data() }));
	users.forEach(user => {
		const amountOfProjects = Object.keys(user.projects);
		console.log(user, amountOfProjects.length);
	});
};

export default Ranking;
