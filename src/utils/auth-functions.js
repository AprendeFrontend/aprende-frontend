import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase.config';

const saveUserIfNotExists = async user => {
	try {
		const userRef = doc(db, 'users', user.uid);
		const userSnap = await getDoc(userRef);

		if (userSnap.exists()) return userSnap.data();

		await setDoc(userRef, {
			displayName: user.displayName || 'Anónimo',
			email: user.email,
			photoURL: user.photoURL || null,
			createdAt: serverTimestamp(),
			projects: []
		});

		console.log('Usuario guardado exitosamente en Firestore');

		return userSnap.data();
	} catch (error) {
		console.error('Error al guardar el usuario:', error);
	}
};

export const signInWithGithub = async saveDatabaseUserInfo => {
	try {
		const provider = new GithubAuthProvider();
		const result = await signInWithPopup(auth, provider);
		const userInfo = await saveUserIfNotExists(result.user);

		saveDatabaseUserInfo(userInfo);

		return userInfo;
	} catch (error) {
		console.error(error);
	}
};

export const logout = async () => {
	await signOut(auth);
};
