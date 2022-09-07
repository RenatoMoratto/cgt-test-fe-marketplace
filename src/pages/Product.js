import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import { getProductById } from "../api";

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
		<div>
			{isLoading && <p>Loading...</p>}
			{!isLoading && (
				<>
					<h1>{product.name}</h1>
					<p>Price: {product.price} USD</p>

					<button onClick={addToCartHandler}>Add to cart</button>

					<div>
						<img src={product.imageURL} width={640} alt="" />
					</div>
				</>
			)}
		</div>
	);
}

export default Product;
