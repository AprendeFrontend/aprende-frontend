import styles from './hero.module.css';

const Hero = ({ title, text, image, children }) => {
  return (
    <div className={styles['hero-info']}>
      <div>
        <h1 className={styles['hero-title']}>{title}</h1>
        <p className={styles['hero-text']}>{text}</p>
        {children}
      </div>
      {image && <img className={styles['hero-image']} src={image} alt='' />}
    </div>
  );
};

export default Hero;
