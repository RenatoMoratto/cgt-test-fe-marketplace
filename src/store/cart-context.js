import React, { useReducer } from "react";

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

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedTotalAmount = state.totalAmount + action.item.price;

		const existingItemIndex = state.items.findIndex(cartItem => cartItem.id === action.item.id);
		const existingItem = state.items[existingItemIndex];

		let updatedItems;

		if (existingItem) {
			const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };

			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat({ ...action.item, amount: 1 });
		}

		const updatedCart = {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};

		localStorage.setItem("cart", JSON.stringify(updatedCart));

		return updatedCart;
	}

	if (action.type === "REMOVE") {
		const existingItemIndex = state.items.findIndex(item => item.id === action.id);
		const existingItem = state.items[existingItemIndex];

		const updatedTotalAmount = state.totalAmount - existingItem.price;

		let updatedItems;

		if (existingItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id);
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		}

		const updatedCart = {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};

		localStorage.setItem("cart", JSON.stringify(updatedCart));

		return updatedCart;
	}

	if (action.type === "CLEAR") {
		localStorage.removeItem("cart");

		return defaultCartState;
	}
};

export function CartProvider({ children }) {
	const cartLocalStorageValue = JSON.parse(localStorage.getItem("cart"));

	const [cartState, dispatchCartAction] = useReducer(cartReducer, cartLocalStorageValue ?? defaultCartState);

	const addItemToCartHandler = item => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeItemFromCartHandler = id => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};

	function clearCartHandler() {
		dispatchCartAction({ type: "CLEAR" });
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
		clearCart: clearCartHandler,
	};
	return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
