import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import styles from "./Product.module.css";

const defaultProductValue = {
	name: "",
	description: "",
	image: "",
	price: 0.0,
};

function Product() {
	const { addItem } = useContext(CartContext);

	const [product, setProduct] = useState(defaultProductValue);
	const [isLoading, setIsLoading] = useState(true);

	const pathname = window.location.href.split("products/")[1];

	const price = product.price.toFixed(2);

	const addToCartHandler = () => {
		addItem(product);
	};

	useEffect(() => {
		setIsLoading(true);

		fetch(`${process.env.REACT_APP_API_URL}/${pathname}`)
			.then(response => response.json())
			.then(data => setProduct(data))
			.finally(() => setIsLoading(false));
	}, [pathname]);

	return (
		<>
			{isLoading && <Spinner />}
			{!isLoading && (
				<div className={styles.layout}>
					<div className={styles.image}>
						<img src={product.image} alt="" />
					</div>

					<Card className={styles.card}>
						<div className={styles.description}>
							<h1>{product.name}</h1>
							<p>{product.description}</p>
						</div>

						<div className={styles.price}>
							<p>{price} USD</p>
							<Button onClick={addToCartHandler}>Add to cart</Button>
						</div>
					</Card>
				</div>
			)}
		</>
	);
}

export default Product;
