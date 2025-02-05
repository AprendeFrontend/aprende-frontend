import styles from './social.module.css';

const Social = () => {
  console.log(styles);
  return (
    <ul className={styles['social']}>
      <li className={styles['social-item']}>
        <img src='/assets/icons/discord-icon.svg' alt='discord icon' />
      </li>
      <li className={styles['social-item']}>
        <img src='/assets/icons/twitter-icon.svg' alt='discord icon' />
      </li>
      <li className={styles['social-item']}>
        <img src='/assets/icons/instagram-icon.svg' alt='discord icon' />
      </li>
      <li className={styles['social-item']}>
        <img src='/assets/icons/tiktok-icon.svg' alt='discord icon' />
      </li>
    </ul>
  );
};

export default Social;
