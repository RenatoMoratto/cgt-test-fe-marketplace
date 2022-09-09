import { useContext } from "react";
import CartItem from "../components/CartItem";
import Card from "../components/Card";
import Button from "../components/Button";
import CartContext from "../store/cart-context";
import styles from "./Cart.module.css";

function Cart() {
	const cartCtx = useContext(CartContext);

	const cartItemRemoveHandler = id => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = item => {
		cartCtx.addItem(item);
	};

	const submitOrderHandler = () => {
		cartCtx.clearCart();
	};

	return (
		<Card className={styles.cart}>
			<p>Are you ready to purchase these?</p>
			<ul className={styles["cart-items"]}>
				{cartCtx.items.map(cartItem => (
					<CartItem
						key={cartItem.id}
						name={cartItem.name}
						price={cartItem.price}
						amount={cartItem.amount}
						image={cartItem.image}
						onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
						onAdd={cartItemAddHandler.bind(null, cartItem)}
					/>
				))}
			</ul>
			<div className={styles.total}>
				<p>Total Amount:</p>
				<p>${cartCtx.totalAmount.toFixed(2)}</p>
			</div>
			<div className={styles["button-wrapper"]}>
				<Button onClick={submitOrderHandler}>Order</Button>
			</div>
		</Card>
	);
}

export default Cart;
