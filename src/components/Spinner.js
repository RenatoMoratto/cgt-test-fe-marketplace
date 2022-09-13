import styles from "./Spinner.module.css";

function Spinner() {
	return (
		<div className={styles.container}>
			<div className={styles.spinner} />
			<span className={styles.hidden}>Loading...</span>
		</div>
	);
}

export default Spinner;
