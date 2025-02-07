'use client';
import { useAuth } from '@/providers/AuthProvider';
import Link from 'next/link';
import { useState } from 'react';
import { CHALLENGES } from '../../constants/challenges';
import { TECHNOLOGIES } from '../../constants/technologies';
import Button from '../button/Button';
import Footer from '../footer/Footer';
import styles from './challenges.module.css';

const buttons = ['Todos los retos', 'HTML - CSS', 'JavaScript'];

const Challenges = () => {
  const [active, setActive] = useState(0);
  const filteredChallenges = filterChallenges(CHALLENGES, active);
  const { user } = useAuth();
  const projectsFinished = user?.projects.filter(
    project => project.submitted && filteredChallenges.some(challenge => challenge.id === project.id)
  ).length;

  return (
    <>
      <div className={styles['filters']}>
        {buttons.map((label, index) => (
          <Button key={label} className={`${active === index ? 'button-active' : 'button-ghost'}`} onClick={() => setActive(index)}>
            {label}
          </Button>
        ))}
      </div>

      {user && (
        <p className={styles['progress']}>
          Has completado {projectsFinished} de {filteredChallenges.length} retos
        </p>
      )}

      <div className={styles['challenges']}>
        {filteredChallenges.map(challenge => {
          const userStartChallenge = user?.projects.find(project => project.id === challenge.id);
          const userFinishedChallenge = userStartChallenge?.submitted;
          return (
            <Link key={challenge.id} href={`/challenge/${challenge.id}`}>
              <div className={styles['challenge-box']}>
                <span className={styles['challenge-box-tag']} style={{ backgroundColor: `var(${challenge.color})` }}>
                  Nivel {challenge.level}
                </span>
                <img className={styles['challenge-image']} src={challenge.image} alt={challenge.name} />
                <div className={styles['challenge-box-footer']}>
                  <h2 className={styles['challenge-title']}>{challenge.name}</h2>
                  {userStartChallenge && !userFinishedChallenge && <span className={styles['challenge-box-start']}>Iniciado</span>}
                  {userStartChallenge && userFinishedChallenge && <span className={styles['challenge-box-finished']}>Completado</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

const filterChallenges = (challenges, filter) => {
  if (filter === 0) return [...challenges];
  if (filter === 1) return challenges.filter(challenge => challenge.technology === TECHNOLOGIES.HTML_CSS).sort((a, b) => a.level - b.level);
  if (filter === 2)
    return challenges.filter(challenge => challenge.technology === TECHNOLOGIES.JAVASCRIPT).sort((a, b) => a.level - b.level);
};

export default Challenges;
