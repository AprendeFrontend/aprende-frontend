import { useEffect, useState } from 'react';

import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const areUser = currentUser && !loading;
	const username = currentUser?.reloadUserInfo.screenName;
	const profileImage = currentUser?.reloadUserInfo.photoUrl;

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
			setLoading(false);
		});

		return () => unsuscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ loading, areUser, username, profileImage }}>
			{children}
		</AuthContext.Provider>
	);
};
