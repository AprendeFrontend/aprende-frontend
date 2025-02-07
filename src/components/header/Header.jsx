'use client'; // Necesario para Hooks en Next.js

import Button from '../button/Button';
import styles from './header.module.css';

import { useAuth } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useState } from 'react';
import Hero from '../hero/Hero';

const Header = ({ className = '', children, ...props }) => {
  const { user, logout, login, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerStyles = styles[className];
  const { title, text, image } = props;

  return (
    <header {...props} className={`${styles.header} ${headerStyles}`}>
      <div className={styles['top-bar']}>
        <div className={styles['top-bar-content']}>
          <Link href='/'>
            <img className={styles.logo} src='/assets/icons/logo.svg' alt='logo' />
          </Link>
          {!loading && user && (
            <div className={styles['login-container']}>
              <img className={styles['login-image']} src={user.photoURL} alt='Imagen de usuario' onClick={() => setMenuOpen(!menuOpen)} />
            </div>
          )}
          {!loading && !user && (
            <Button className='button-github button-hover' onClick={login}>
              Iniciar Sesión Con Github
              <img className={styles['icon-github']} src='/assets/icons/github.svg' alt='' />
            </Button>
          )}
          {menuOpen && (
            <div className={styles['header-logout-container']}>
              <button
                className={styles['header-logout']}
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
              >
                Cerrar Sesión
              </button>
            </div>
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
