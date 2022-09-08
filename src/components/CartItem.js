import styles from "./CartItem.module.css";

const CartItem = ({ name, price, amount, image }) => {
	return (
		<li className={styles["cart-item"]}>
			<picture className={styles.image}>
				<img src={image} alt="" />
			</picture>
			<div className={styles.description}>
				<h2>{name}</h2>

				<div className={styles.summary}>
					<span className={styles.price}>${price.toFixed(2)}</span>
					<span className={styles.amount}>x {amount}</span>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
