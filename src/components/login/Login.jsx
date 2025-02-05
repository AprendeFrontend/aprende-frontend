'use client';
import { useAuth } from '@/providers/AuthProvider';

// Next.js necesita esto para Hooks en el frontend

const Login = () => {
  const { user, login, logout } = useAuth();
  console.log(user);
  return (
    <div>
      {user ? (
        <>
          <p>Bienvenido, {user.displayName}</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <button onClick={login}>Iniciar Sesión con Github</button>
      )}
    </div>
  );
};

export default Login;
