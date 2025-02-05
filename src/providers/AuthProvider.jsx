'use client'; // Habilita el uso de Hooks en Next.js
import { AuthContext } from '@/contexts/AuthContext';
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { auth, db } from '../config/firebase.config';

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeUser;

    const unsubscribeAuth = auth.onAuthStateChanged(async user => {
      if (!user) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userRef = doc(db, 'users', user.uid);
      unsubscribeUser = onSnapshot(userRef, docSnapshot => {
        setUser(docSnapshot.exists() ? { ...user, ...docSnapshot.data() } : user);
        setLoading(false);
      });
    });

    return () => {
      unsubscribeUser?.();
      unsubscribeAuth();
    };
  }, []);

  return <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>;
};

const saveUserIfNotExists = async user => {
  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) return;

    await setDoc(userRef, {
      displayName: user.displayName || 'Anónimo',
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: serverTimestamp(),
      projects: []
    });

    console.log('Usuario guardado exitosamente en Firestore');

    return;
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
  }
};

// Función para iniciar sesión con Github
const login = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    await saveUserIfNotExists(result.user);
  } catch (error) {
    console.error(error);
  }
};

// Función para cerrar sesión
const logout = async () => {
  await signOut(auth);
};

// Hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
