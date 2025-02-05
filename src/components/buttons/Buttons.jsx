import styles from './buttons.module.css';
const Buttons = ({ children }) => {
  return <div className={styles.buttons}>{children}</div>;
};

export default Buttons;
