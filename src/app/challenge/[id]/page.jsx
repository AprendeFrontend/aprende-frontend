'use client';
import Button from '@/components/button/Button';
import Buttons from '@/components/buttons/Buttons';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { usersCollectionReference } from '@/config/firebase.config';
import { CHALLENGES } from '@/constants/challenges';
import { useAuth } from '@/providers/AuthProvider';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import styles from './challenge-page.module.css';

const ChallengePage = () => {
  const [viewForm, setViewForm] = useState(false);
  const [formErrors, setFormErrors] = useState({ username: false, githubURL: false, liveURL: false });
  console.log(formErrors);
  const { user, login } = useAuth();
  const { id } = useParams();
  const userStartProject = user?.projects.find(project => project.id === id);
  const challenge = CHALLENGES.find(challenge => challenge.id === id);
  return (
    <>
      <Header title={challenge.name} text={challenge.headerDescription} />
      <div className={styles['challenge-page']}>
        <Link href='/challenges' className={styles['button-back']}>
          <Button className='button-ghost'>Volver a desafíos</Button>
        </Link>
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
            <div className={styles['challenge-page-user-actions']}>
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
              {user && !userStartProject && (
                <Button className='button-primary' onClick={() => startChallenge(id, user.uid)}>
                  Empezar desafío
                </Button>
              )}
              {user && userStartProject && (
                <>
                  <p>
                    <b>Desafío comenzado el {userStartProject.startDate}</b>
                  </p>
                  <Button className='button-primary'>Descargar material inicial</Button>
                </>
              )}
            </div>
          </div>
        </div>
        {user && userStartProject && (
          <div className={styles['challenge-footer']}>
            <div className={styles['challenge-guide']}>
              <h2 className={styles['challenge-guide-title']}>Sugerencias y Restriciones</h2>
              <p className={styles['challenge-guide-text']}>Para un desarrollo óptimo de la práctica se recomienda usar:</p>
              <ul className={styles['challenge-guide-list']}>
                {challenge.suggestions.map(suggestion => (
                  <li key={suggestion} className={styles['challenge-guide-list-item']}>
                    {suggestion}
                  </li>
                ))}
              </ul>
              <p className={styles['challenge-guide-text']}>
                Para cumplir el objetivo óptimo de este desafío existen algunas restricciones.
              </p>
              <ul className={styles['challenge-guide-list']}>
                {challenge.restrictions.map(restriction => (
                  <li key={restriction} className={styles['challenge-guide-list-item']}>
                    {restriction}
                  </li>
                ))}
              </ul>
              <Button className='button-primary' onClick={() => setViewForm(true)}>
                Realizar Entrega
              </Button>
            </div>
            {viewForm && (
              <form className={styles['delivery-form']} onSubmit={event => handleSubmit(event, id, user.uid, setFormErrors)}>
                <div className={styles['delivery-form-field']}>
                  <label htmlFor='username' className={styles['delivery-form-label']}>
                    Nombre de Usuario
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='e.g. doriandesings'
                    className={styles['delivery-form-input']}
                  />
                  {formErrors.username && <span className={styles['delivery-form-error']}>Introduce el nombre de usuario</span>}
                </div>
                <div className={styles['delivery-form-field']}>
                  <label htmlFor='github-url' className={styles['delivery-form-label']}>
                    URL de Github
                  </label>
                  <input
                    type='text'
                    id='github-url'
                    name='githubUrl'
                    placeholder='e.g. https://github.com/doriandesings'
                    className={styles['delivery-form-input']}
                  />
                  {formErrors.githubURL && <span className={styles['delivery-form-error']}>Introduce la URL de tu repositorio</span>}
                </div>
                <div className={styles['delivery-form-field']}>
                  <label htmlFor='live-url' className={styles['delivery-form-label']}>
                    URL de la vista en vivo
                  </label>
                  <input
                    type='text'
                    id='live-url'
                    name='liveUrl'
                    placeholder='e.g. https://doriandesings.github.io/qr-code'
                    className={styles['delivery-form-input']}
                  />
                  {formErrors.githubURL && <span className={styles['delivery-form-error']}>Introduce la URL de tu vista en vivo</span>}
                </div>
                <Buttons>
                  <Button className='button-primary'>Enviar</Button>
                  <Button type='button' className='button-ghost-error' onClick={() => setViewForm(false)}>
                    Cancelar
                  </Button>
                </Buttons>
              </form>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

const startChallenge = async (id, userId) => {
  try {
    const userRef = doc(usersCollectionReference, userId);

    await updateDoc(userRef, {
      projects: arrayUnion({
        id,
        startDate: new Date().toLocaleDateString('es-ES'),
        submitted: false,
        githubURL: '',
        liveURL: ''
      })
    });

    console.log(`Proyecto ${id} añadido para el usuario ${userId}`);
  } catch (error) {
    console.error('Error al iniciar el reto:', error);
  }
};

const handleSubmit = async (event, id, userId, setFormErrors) => {
  event.preventDefault();
  const username = event.target.username.value;
  const githubURL = event.target.githubUrl.value;
  const liveURL = event.target.liveUrl.value;

  setFormErrors({
    username: !username,
    githubURL: !githubURL,
    liveURL: !liveURL
  });

  if (!username || !githubURL || !liveURL) return;

  try {
    const userRef = doc(usersCollectionReference, userId);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      console.error('El usuario no existe en Firestore');
      return;
    }

    const userData = userDoc.data();
    const projects = userData.projects || [];

    // Buscar el índice del proyecto a actualizar
    const projectIndex = projects.findIndex(proj => proj.id === id);

    if (projectIndex === -1) {
      console.error('El proyecto no existe en la base de datos');
      return;
    }

    // Actualizar los datos del proyecto en el array
    projects[projectIndex] = {
      ...projects[projectIndex],
      submitted: true,
      githubURL,
      liveURL,
      username
    };

    // Guardar el array actualizado en Firestore
    await updateDoc(userRef, { projects });

    console.log(`Proyecto ${id} actualizado para el usuario ${userId}`);
  } catch (error) {
    console.error('Error al actualizar el reto:', error);
  }
};

export default ChallengePage;
