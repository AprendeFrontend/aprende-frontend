import styles from './row.module.css';

const Row = ({ image, title, text, ...props }) => {
  const rowStyles = styles[props.className];
  return (
    <div className={styles['row']}>
      <div className={`${styles['row-content']} ${rowStyles}`}>
        <img className={styles['row-content-image']} src={image} alt='' />
        <div>
          <h2 className={styles['row-title']}>{title}</h2>
          <p className={styles['row-text']}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Row;
