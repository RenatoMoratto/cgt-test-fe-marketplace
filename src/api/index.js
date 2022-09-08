const PRODUCTS = [
	{
		id: 1,
		name: "SPACESUIT NASA ACES 3D model",
		price: 10,
		description:
			"3D Advanced crew escape suit astronaut modeled in high precision. Used in the space shuttle nasa program ( atlantis, endeavor, dicovery, challenger, columbia, enterprise ) this is a mix between several references i found. this model has been accurately recreated in 3d High poly to keep every details.",
		imageURL: require("./imgs/a.jpg"),
		userInterest: true,
	},
	{
		id: 2,
		name: "SPACESUIT NASA Mercury Navy Mark IV",
		price: 40,
		description:
			"3D Mercury Navy Mark IV ( 4 ) modeled in high precision. Worn by the famous mercury seven, the first Seven astronauts. this is a mix between several references i found. this model has been accurately recreated in 3d High poly to keep every details.",
		imageURL: require("./imgs/c.jpg"),
		userInterest: true,
	},
	{
		id: 3,
		name: "Alien Statue Fanart 3D print model",
		price: 19.5,
		description:
			"This is fully detailed statue of an Alien creature. This figure is prepared to be printed on SLA and also FDM printers. It's assmebled from 20 pieces - cut , keyed and hollowed. Separate Folder called FDM is a model with no holes, for better printing results. Model on the pictures was printed on the form2 SLA printer. You will find here files in formats like: stl, obj, FBX. This is only printable file and doesn't contain textures neither mtl.",
		imageURL: require("./imgs/b.jpg"),
		newests: true,
	},
	{
		id: 4,
		name: "Dog alien Sculptures and Bust - fanart Collection",
		price: 26,
		description:
			"This is a collection of three separately prepared model statues, depicting Dog Alien in two different poses and a bust. Each has unique base stand. They are in total of 51 pieces easy to print and assemble. Pieces are cut , keyed and hollowed. Both aliens has also a removable canopy, so it can be printed in transparent resin to get a better end result.",
		imageURL: require("./imgs/d.jpg"),
		newests: true,
	},
	{
		id: 5,
		name: "HAZMAT NBC Suit 3D model",
		price: 42,
		description:
			"Gas Mask Included 3D Hazmat nuclear , bacteriological , chemical hazard NBC ( Level 3 and 4 ) Kane Pixels backroom suit modeled in high precision with two Color Sets of Textures. This is a mix between several references i found. this model has been accurately recreated in 3d High poly to keep every details.",
		imageURL: require("./imgs/e.jpg"),
		userInterest: true,
	},
	{
		id: 6,
		name: "HAZMAT SUIT Chernobyl Liquidator 3D model",
		price: 28,
		description:
			"NBC SUIT + OVERALL COAT + GAS MASK 3D Hazmat nuclear , bacteriological , chemical hazard NBC Chernbobyl Liquidator, backroom suit modeled in high precision. this is a mix between several references i found. this model has been accurately recreated in 3d High poly to keep every details.",
		imageURL: require("./imgs/f.jpg"),
		userInterest: true,
	},
	{
		id: 7,
		name: "Apollo 11 A7L Spacesuit 3D model",
		price: 52.5,
		description:
			"3D Apollo 11 A7L astronaut spacesuit with Helmet, Torso Camera, Gloves and Boots modeled in high precision. this is a mix between several references i found, some parts are freely interprated. this model has been accurately recreated in 3d High poly to keep every details.",
		imageURL: require("./imgs/g.jpg"),
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
