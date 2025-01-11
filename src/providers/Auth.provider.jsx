import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const areUser = currentUser && !loading;
	const username = currentUser?.displayName || 'Anónimo';
	const profileImage = currentUser?.photoURL;

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(async user => {
			if (user) {
				const databaseInfo = await fetchUserFromDatabase(user.uid);
				setCurrentUser({
					...user,
					...databaseInfo // Incluye todos los datos de Firestore
				});
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return () => unsuscribe();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				loading,
				areUser,
				username,
				profileImage,
				currentUser
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const fetchUserFromDatabase = async uid => {
	try {
		const userRef = doc(db, 'users', uid); // Ruta a la colección de usuarios en Firestore
		const userSnap = await getDoc(userRef);

		if (userSnap.exists()) {
			return userSnap.data(); // Retorna los datos de Firestore
		}
		return null; // Si el documento no existe
	} catch (error) {
		console.error('Error al obtener la información del usuario:', error);
		return null;
	}
};
