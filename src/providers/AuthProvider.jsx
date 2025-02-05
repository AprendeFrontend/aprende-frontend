'use client'; // Habilita el uso de Hooks en Next.js
import { useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { AuthContext } from '@/contexts/AuthContext';

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Escuchar cambios en la autenticación
  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

// Función para iniciar sesión con Google
const login = async () => {
  const provider = new GithubAuthProvider();
  await signInWithPopup(auth, provider);
};

// Función para cerrar sesión
const logout = async () => {
  await signOut(auth);
};

// Hook para usar el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
