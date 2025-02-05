import Button from '../button/Button';
import styles from './discord.module.css';

const Discord = () => {
  return (
    <>
      <div className={styles['discord-container']}>
        <img className={styles['discord-logo']} src='/assets/icons/discord-logo.svg' alt='' />
        <div>
          <h2 className={styles['discord-title']}>Programa en comunidad</h2>
          <p className={styles['discord-text']}>
            Tenemos un servidor de discord donde podrás hablar con gente que se está enfrentando a los mismos retos que tu, pregunta dudas,
            comparte tu código y conoce gente que está al mismo nivel que tú.
          </p>
          <Button className='button-white'>Unirse a Discord</Button>
        </div>
      </div>
    </>
  );
};

export default Discord;
