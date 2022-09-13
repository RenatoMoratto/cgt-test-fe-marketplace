import { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import CardImage from "../components/CardImage";
import styles from "./Home.module.css";

function Home() {
	const [userInterests, setUserInterests] = useState([]);
	const [newests, setNewests] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		fetch(`${process.env.REACT_APP_API_URL}/user-interests`)
			.then(response => response.json())
			.then(data => setUserInterests(data))
			.finally(() => setIsLoading(false));

		fetch(`${process.env.REACT_APP_API_URL}/newests`)
			.then(response => response.json())
			.then(data => setNewests(data))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.home}>
			<h2>Welcome to our shop!</h2>

			{isLoading && <Spinner />}
			{!isLoading && (
				<div className={styles.products}>
					<Card>
						<h3>You are probably interested in:</h3>
						<div className={styles["interest-products-grid"]}>
							{userInterests.map(item => (
								<CardImage
									key={item.id}
									href={`products/user-interests/${item.id}`}
									name={item.name}
									image={item.image}
									price={item.price}
								/>
							))}
						</div>
					</Card>

					<Card>
						<h3>Check out the newest products!</h3>
						<div className={styles["newest-products-grid"]}>
							{newests.map(item => (
								<CardImage
									key={item.id}
									href={`products/newests/${item.id}`}
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
