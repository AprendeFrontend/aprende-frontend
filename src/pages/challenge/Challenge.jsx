import { doc, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import Login from '../../components/login/Login';
import { db } from '../../config/firebase.config';
import { CHALLENGES } from '../../constants/challenges';
import { AuthContext } from '../../contexts/Auth.context';
import { StyledMainContainer } from '../../styles/common';

const Challenge = () => {
	const { currentUser, areUser, loading } = useContext(AuthContext);

	const { id, level } = useParams();

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		if (!currentUser) return;
		setProjects(currentUser.projects);
	}, [currentUser]);

	const challengesForLevel = CHALLENGES[level];
	const challengeSelected = challengesForLevel.find(
		challenge => challenge.id === id
	);

	const { name, image, description, requirements } = challengeSelected;

	const projectStart = projects?.find(project => project.projectId === id);

	console.log(projectStart);

	if (loading) return <h1>Loading...</h1>;

	return (
		<StyledMainContainer>
			<h1>{name}</h1>
			<img src={image} alt='' />
			<p>{description}</p>
			<p>{requirements}</p>

			{!areUser && <Login />}

			{!projectStart && areUser && (
				<Button action={() => updateProjets(currentUser, name, id)}>
					EMPEZAR DESAFÍO
				</Button>
			)}
			{projectStart && areUser && (
				<p>Proyecto empezado el {projectStart.startTime}</p>
			)}
		</StyledMainContainer>
	);
};

const updateProjets = async (currentUser, projectName, projectId) => {
	const startTime = new Date().toLocaleString();
	console.log();
	const updatedProjects = [
		...currentUser.projects,
		{ projectName, projectId, startTime }
	];

	const userRef = doc(db, 'users', currentUser.uid);
	await updateDoc(userRef, { projects: updatedProjects });
};

export default Challenge;
