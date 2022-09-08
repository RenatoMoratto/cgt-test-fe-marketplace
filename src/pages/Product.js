import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import { getProductById } from "../api";
import styles from "./Product.module.css";

function Product() {
	const { addItem } = useContext(CartContext);

	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const query = window.location.search;
	const id = query.replace("?id=", "");

	const addToCartHandler = () => {
		addItem(product);
	};

	useEffect(() => {
		setIsLoading(true);

		getProductById(id)
			.then(response => setProduct(response))
			.finally(() => setIsLoading(false));
	}, [id]);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{!isLoading && (
				<div className={styles.layout}>
					<div className={styles.image}>
						<img src={product.imageURL} alt="" />
					</div>
					<div className={styles.card}>
						<div className={styles.description}>
							<h1>{product.name}</h1>
							<p>{product.description}</p>
						</div>

						<div className={styles.price}>
							<p>{product.price.toFixed(2)} USD</p>
							<button className={styles.button} onClick={addToCartHandler}>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Product;
