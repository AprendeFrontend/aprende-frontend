'use client'; // Necesario para Hooks en Next.js

import Button from '../button/Button';
import styles from './header.module.css';

import { useAuth } from '@/providers/AuthProvider';
import Hero from '../hero/Hero';

const Header = ({ className = '', children, ...props }) => {
  const { user, logout, login } = useAuth();
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

      <Hero title={title} text={text} image={image}>
        {children}
      </Hero>

      <img className={styles['header-wave']} src='/assets/images/header-wave.svg' alt='' />
    </header>
  );
};

export default Header;
