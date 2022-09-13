import styles from "./CardImage.module.css";

function CardImage({ href, name, price, image }) {
	return (
		<a href={href} className={styles["card-image"]}>
			<img src={image} alt={name} />
			<div className={styles["card-info"]}>
				<p aria-hidden="true">{name}</p>
				<span>${price.toFixed(2)}</span>
			</div>
		</a>
	);
}

export default CardImage;
