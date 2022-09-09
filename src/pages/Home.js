import { useEffect, useState } from "react";
import { getNewestProducts, getUserInterestProducts } from "../api";
import Card from "../components/Card";
import CardImage from "../components/CardImage";
import styles from "./Home.module.css";

function Home() {
	const [userInterests, setUserInterests] = useState([]);
	const [newests, setNewests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		getUserInterestProducts()
			.then(response => setUserInterests(response))
			.finally(() => setIsLoading(false));

		getNewestProducts()
			.then(response => setNewests(response))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.home}>
			<Card>
				<h2>Welcome to our shop!</h2>
			</Card>
			{isLoading && <p>Loading...</p>}
			{!isLoading && (
				<div className={styles.products}>
					<Card>
						<h3>You are probably interested in:</h3>
						<div className={styles["interest-products-grid"]}>
							{userInterests.map(item => (
								<CardImage
									href={`/products?id=${item.id}`}
									name={item.name}
									image={item.image}
									price={item.price}
								/>
							))}
						</div>
					</Card>

					<Card>
						<h3>Check out the newest product!</h3>
						<div className={styles["newest-products-grid"]}>
							{newests.map(item => (
								<CardImage
									href={`/products?id=${item.id}`}
									name={item.name}
									image={item.image}
									price={item.price}
								/>
							))}
						</div>
					</Card>
				</div>
			)}
		</div>
	);
}

export default Home;
