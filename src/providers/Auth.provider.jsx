import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const areUser = currentUser && !loading;
	const username = currentUser?.displayName || 'Anónimo';
	const profileImage = currentUser?.photoURL;

	useEffect(() => {
		let unsubscribeUser = null;

		const unsubscribeAuth = auth.onAuthStateChanged(user => {
			if (user) {
				// Configurar un watcher en Firestore para el usuario autenticado
				const userRef = doc(db, 'users', user.uid);
				unsubscribeUser = onSnapshot(userRef, docSnapshot => {
					if (docSnapshot.exists()) {
						// Actualiza `currentUser` con datos en tiempo real
						setCurrentUser({
							...user,
							...docSnapshot.data()
						});
					} else {
						console.warn('El documento del usuario no existe.');
						setCurrentUser(user); // Mantén los datos básicos de Auth si no hay datos en Firestore
					}
				});
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return () => {
			// Limpiar ambos listeners cuando el componente se desmonte
			if (unsubscribeUser) unsubscribeUser();
			unsubscribeAuth();
		};
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
