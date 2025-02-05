'use client';
import Button from '@/components/button/Button';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { CHALLENGES } from '@/constants/challenges';
import { useAuth } from '@/providers/AuthProvider';
import { useParams } from 'next/navigation';
import styles from './challenge-page.module.css';

const ChallengePage = () => {
  const { user, login } = useAuth();
  const { id } = useParams();
  const challenge = CHALLENGES.find(challenge => challenge.id === id);
  return (
    <>
      <Header title={challenge.name} text={challenge.headerDescription} />
      <div className={styles['challenge-page']}>
        <a href='/challenges' className={styles['button-back']}>
          <Button className='button-ghost'>Volver a desafíos</Button>
        </a>
        <div className={styles['challenge-page-info']}>
          <img className={styles['challenge-page-image']} src={challenge.image} alt='' />
          <div>
            <div>
              <h2 className={styles['challenge-page-title']}>{challenge.name}</h2>
              <p className={styles['challenge-page-text']}>{challenge.pageDescription}</p>
            </div>
            <ul className={styles['challenge-page-skills']}>
              {challenge.skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className={styles['challenge-page-footer']}>
              {!user && (
                <>
                  <Button className='button-primary' onClick={login}>
                    Iniciar Sesión
                  </Button>
                  <p>
                    <b>Inicia Sesión para empezar el desafío</b>
                  </p>
                </>
              )}
              {user && <Button className='button-primary'>Descargar Material Inicial</Button>}
            </div>
          </div>
        </div>
        {user && (
          <>
            <h2>Sugerencias y Restriciones</h2>
            <p>Para un desarrollo óptimo de la práctica se recomienda usar:</p>
            <ul>
              {challenge.suggestions.map(suggestion => (
                <li key={suggestion}>{suggestion}</li>
              ))}
            </ul>
            <p>Para cumplir el objetivo óptimo de este desafío existen algunas restricciones.</p>
            <ul>
              {challenge.restrictions.map(restriction => (
                <li key={restriction}>{restriction}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ChallengePage;
