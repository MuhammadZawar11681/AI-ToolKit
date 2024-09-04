import styles from './Button.module.css';

const Button = ({ isOutline, text, icon, onClick }) => {
  return (
    <button 
      className={isOutline ? styles.outline_btn : styles.primary_btn} 
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
