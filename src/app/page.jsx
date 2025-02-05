import Login from '@/components/login/Login';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>HOME</h1>
      <Login />
    </div>
  );
}
