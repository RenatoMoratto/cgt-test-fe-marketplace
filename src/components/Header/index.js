import { useContext } from "react";
import CartContext from "../../store/cart-context";

function Header() {
	const { items } = useContext(CartContext);

	const numberOfCartItems = items.reduce((current, item) => current + item.amount, 0);

	return (
		<header>
			90s shop
			<nav>
				<ul style={{ listStyleType: "none", display: "flex" }}>
					<li>
						<a href="/">Home</a>
					</li>
					|
					<li>
						<a href="/cart">Cart ({numberOfCartItems})</a>
					</li>
				</ul>
			</nav>
			<hr />
		</header>
	);
}

export default Header;
