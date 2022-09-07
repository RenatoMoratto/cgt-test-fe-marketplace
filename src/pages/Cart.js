import { useContext } from "react";
import CartContext from "../store/cart-context";

function Cart() {
	const { items, totalAmount } = useContext(CartContext);

	return (
		<div>
			Are you ready to purchase these?
			<ul>
				{items.map(cartItem => (
					<li key={cartItem.id}>
						{cartItem.name}: ${cartItem.price.toFixed(2)} x{cartItem.amount}
					</li>
				))}
			</ul>
			<p>Total Amount: ${totalAmount.toFixed(2)}</p>
		</div>
	);
}

export default Cart;
