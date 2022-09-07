import { useContext } from "react";
import CartContext from "../store/cart-context";

function Cart() {
	const cartCtx = useContext(CartContext);

	const submitOrderHandler = () => {
		cartCtx.clearCart();
	};

	return (
		<div>
			Are you ready to purchase these?
			<ul>
				{cartCtx.items.map(cartItem => (
					<li key={cartItem.id}>
						{cartItem.name}: ${cartItem.price.toFixed(2)} x{cartItem.amount}
					</li>
				))}
			</ul>
			<p>Total Amount: ${cartCtx.totalAmount.toFixed(2)}</p>
			<button onClick={submitOrderHandler}>Order</button>
		</div>
	);
}

export default Cart;
