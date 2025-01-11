import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase.config';

const saveUserIfNotExists = async user => {
	try {
		const userRef = doc(db, 'users', user.uid);
		const userSnap = await getDoc(userRef);

		console.log(userSnap);

		if (userSnap.exists()) return;

		await setDoc(userRef, {
			displayName: user.displayName || 'Anónimo',
			email: user.email,
			photoURL: user.photoURL || null,
			createdAt: serverTimestamp(),
			projects: []
		});
		console.log('Usuario guardado exitosamente en Firestore');
	} catch (error) {
		console.error('Error al guardar el usuario:', error);
	}
};

export const signInWithGithub = async () => {
	try {
		const provider = new GithubAuthProvider();
		const result = await signInWithPopup(auth, provider);
		saveUserIfNotExists(result.user);
	} catch (error) {
		console.error(error);
	}
};

export const logout = async () => {
	await signOut(auth);
};
