import React, { useState } from "react";

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItem: item => {},
	removeItem: id => {},
	clearCart: () => {},
});

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

export function CartProvider({ children }) {
	const cartLocalStorageValue = JSON.parse(localStorage.getItem("cart"));

	const [cart, setCart] = useState(cartLocalStorageValue ?? defaultCartState);

	function addItemToCartHandler(item) {
		const updatedTotalAmount = cart.totalAmount + item.price;

		const existingItemIndex = cart.items.findIndex(cartItem => cartItem.id === item.id);
		const existingItem = cart.items[existingItemIndex];

		let updatedItems;

		if (existingItem) {
			const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };

			updatedItems = [...cart.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = cart.items.concat({ ...item, amount: 1 });
		}

		localStorage.setItem(
			"cart",
			JSON.stringify({
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			})
		);

		setCart({
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		});
	}

	const removeItemFromCartHandler = id => {
		const existingItemIndex = cart.items.findIndex(item => item.id === id);
		const existingItem = cart.items[existingItemIndex];

		const updatedTotalAmount = cart.totalAmount - existingItem.price;

		let updatedItems;

		if (existingItem.amount === 1) {
			updatedItems = cart.items.filter(item => item.id !== id);
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...cart.items];
			updatedItems[existingItemIndex] = updatedItem;
		}

		localStorage.setItem(
			"cart",
			JSON.stringify({
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			})
		);

		setCart({
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		});
	};

	function clearCartHandler() {
		localStorage.removeItem("cart");
		setCart(defaultCartState);
	}

	const cartContext = {
		items: cart.items,
		totalAmount: cart.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler,
	};
	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
