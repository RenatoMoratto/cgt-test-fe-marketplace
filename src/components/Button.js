import styles from "./Button.module.css";

function Button({ className, onClick, children }) {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
