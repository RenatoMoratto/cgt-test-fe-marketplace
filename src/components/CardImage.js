import styles from "./CardImage.module.css";

function CardImage({ href, name, imageURL }) {
	return (
		<a href={href} className={styles["card-image"]}>
			<img src={imageURL} alt="" />
			<p>{name}</p>
		</a>
	);
}

export default CardImage;
