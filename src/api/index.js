const PRODUCTS = [
	{
		id: "a",
		name: "Product A",
		price: 10,
		imageURL: require("./imgs/a.jpg"),
	},
	{
		id: "b",
		name: "Product B",
		price: 30,
		imageURL: require("./imgs/b.jpg"),
	},
];

function simulateDelay() {
	setInterval(() => {}, 400);
}

export async function getAllProducts() {
	simulateDelay();
	return PRODUCTS;
}

export async function getProductById(id) {
	simulateDelay();
	return PRODUCTS.find(product => product.id === id);
}
