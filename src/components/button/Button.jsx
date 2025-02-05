import styles from './button.module.css';

const Button = ({ children, ...props }) => {
  const buttonStyles = styles[props.className];
  return (
    <button {...props} className={`${styles.button} ${buttonStyles}`}>
      {children}
    </button>
  );
};

export default Button;
