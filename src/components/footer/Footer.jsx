import Social from '../social/Social';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <span>© Aprende Frontend - 95% DorianDesings - 5% Joselu - 2025</span>
      <img className={styles['footer-wave']} src='/assets/images/footer-wave.svg' alt='' />
      <Social />
    </footer>
  );
};

export default Footer;
