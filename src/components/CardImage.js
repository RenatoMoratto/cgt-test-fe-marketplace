import styles from "./CardImage.module.css";

function CardImage({ href, name, price, imageURL }) {
	return (
		<a href={href} className={styles["card-image"]}>
			<img src={imageURL} alt="" />
			<div className={styles["card-info"]}>
				<p>{name}</p>
				<span>${price.toFixed(2)}</span>
			</div>
		</a>
	);
}

export default CardImage;
