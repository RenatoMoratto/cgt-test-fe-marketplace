import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "./CartIcon";
import styles from "./Header.module.css";

function Header() {
	const { items } = useContext(CartContext);

	const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

	const numberOfCartItems = items.reduce((current, item) => current + item.amount, 0);

	const cartButtonClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ""}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setButtonIsHighlighted(true);

		const timer = setTimeout(() => {
			setButtonIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<header className={styles.header}>
			<h1>90s shop</h1>
			<nav>
				<ul className={styles.navbar}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/cart" className={cartButtonClasses}>
							<span className={styles.icon}>
								<CartIcon />
							</span>
							Cart <span className={styles.badge}>{numberOfCartItems}</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
