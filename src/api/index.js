const PRODUCTS = [
	{
		id: "a",
		name: "Product A",
		price: 10,
		description:
			"3D Advanced crew escape suit astronaut modeled in high precision. Used in the space shuttle nasa program ( atlantis, endeavor, dicovery, challenger, columbia, enterprise ) this is a mix between several references i found. this model has been accurately recreated in 3d High poly to keep every details.",
		imageURL: require("./imgs/a.jpg"),
		userInterest: true,
	},
	{
		id: "b",
		name: "Product B",
		price: 30,
		description:
			"This is fully detailed statue of an Alien creature. This figure is prepared to be printed on SLA and also FDM printers. It's assmebled from 20 pieces - cut , keyed and hollowed. Separate Folder called FDM is a model with no holes, for better printing results. Model on the pictures was printed on the form2 SLA printer. You will find here files in formats like: stl, obj, FBX. This is only printable file and doesn't contain textures neither mtl.",
		imageURL: require("./imgs/b.jpg"),
		newests: true,
	},
];

function simulateDelay() {
	setInterval(() => {}, 400);
}

export async function getUserInterestProducts() {
	simulateDelay();
	return PRODUCTS.filter(product => product.userInterest);
}

export async function getNewestProducts() {
	simulateDelay();
	return PRODUCTS.filter(product => product.newests);
}

export async function getProductById(id) {
	simulateDelay();
	return PRODUCTS.find(product => product.id === id);
}
