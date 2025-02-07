import styles from './button.module.css';

const Button = ({ children, withIcon = false, ...props }) => {
  const buttonStyles = props.className
    .split(' ')
    .map(cls => styles[cls])
    .join(' ');
  return (
    <button {...props} className={`${styles.button} ${buttonStyles}`}>
      {children}
      {withIcon && <img className={styles['button-arrow']} src='/assets/icons/arrow.svg' alt='arrow icon' />}
    </button>
  );
};

export default Button;
