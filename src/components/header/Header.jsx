'use client'; // Necesario para Hooks en Next.js

import Link from 'next/link';
import Button from '../button/Button';
import Buttons from '../buttons/Buttons';
import styles from './header.module.css';

import { useAuth } from '@/providers/AuthProvider';

const Header = ({ className = '', children, ...props }) => {
  const { user, login, logout } = useAuth(); // Obtener usuario desde el contexto
  const headerStyles = styles[className];
  const { title, text, image } = props;

  return (
    <header {...props} className={`${styles.header} ${headerStyles}`}>
      <div className={styles['top-bar']}>
        <div className={styles['top-bar-content']}>
          <a href='/'>
            <img className={styles.logo} src='/assets/icons/logo.svg' alt='logo' />
          </a>
          {user && (
            <div>
              <p className={styles['user-name']}>{user.displayName || 'Usuario'}</p>
              <button onClick={logout}>Cerrar Sesión</button>
            </div>
          )}

          {!user && (
            <Button className='button-primary' onClick={login}>
              Iniciar Sesión
            </Button>
          )}
        </div>
      </div>
      <div className={styles['header-info']}>
        <div>
          <h1 className={styles['header-title']}>{title}</h1>
          <p className={styles['header-text']}>{text}</p>
          {!user && (
            <Buttons>
              <Button className='button-primary' onClick={login}>
                Empieza a aprender
              </Button>
              <Link href='/challenges'>
                <Button className='button-secondary'>Ver Desafíos</Button>
              </Link>
            </Buttons>
          )}
          {user && (
            <a href='/challenges'>
              <Button className='button-primary'>Ver Desafíos</Button>
            </a>
          )}
        </div>
        <img className={styles['header-image']} src={image} alt='' />
      </div>
      <img className={styles['header-wave']} src='/assets/images/header-wave.svg' alt='' />
    </header>
  );
};

export default Header;
