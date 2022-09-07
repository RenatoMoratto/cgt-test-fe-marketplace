import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartIcon from "./CartIcon";
import styles from "./Header.module.css";

function Header() {
	const { items } = useContext(CartContext);

	const numberOfCartItems = items.reduce((current, item) => current + item.amount, 0);

	return (
		<header className={styles.header}>
			<h1>90s shop</h1>
			<nav>
				<ul className={styles.navbar}>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/cart" className={styles.button}>
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
