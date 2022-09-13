import { useContext } from "react";
import CartItem from "../components/CartItem";
import Card from "../components/Card";
import Button from "../components/Button";
import CartContext from "../store/cart-context";
import styles from "./Cart.module.css";

function Cart() {
	const cartCtx = useContext(CartContext);

	const cartIsEmpty = cartCtx.items.length === 0;

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
			{cartIsEmpty && (
				<div className={styles["empty-cart"]}>
					<h2>Cart is empty</h2>
					<p>
						Looks like you have no items in your shopping cart
						<br />
						Click <a href="/">here</a> to continue shopping.
					</p>
				</div>
			)}
			{!cartIsEmpty && (
				<>
					<h2>Are you ready to purchase these?</h2>
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
				</>
			)}
		</Card>
	);
}

export default Cart;
