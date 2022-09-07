import { useEffect, useState } from "react";
import { getAllProducts } from "../api";

function Home() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const haveProducts = products.length > 0;

	useEffect(() => {
		setIsLoading(true);

		getAllProducts()
			.then(response => setProducts(response))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div>
				Welcome to our shop!
				{isLoading && <p>Loading...</p>}
				{!isLoading && !haveProducts && <p>No products available.</p>}
				{!isLoading && haveProducts && (
					<>
						<p>
							You are probably interested in <a href={`/products?id=${products[0].id}`}>A</a>.
						</p>
						<p>
							Check out the newest product <a href={`/products?id=${products[1].id}`}>B</a>!
						</p>
					</>
				)}
			</div>
		</>
	);
}

export default Home;
