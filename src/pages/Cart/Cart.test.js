import { render, screen } from "@testing-library/react";
import Product from "../Product";
import Cart from "./index";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../../store/cart-context";

const mockResponse = {
	id: 1,
	name: "Product A",
	price: 10,
	description: "Product A description",
	image: require("../../api/public/images/1.jpg"),
};

describe("Cart page", () => {
	it("renders 'Cart is empty' if there are no items at cart", () => {
		render(<Cart />);

		const textElement = screen.getByText("Cart is empty");

		expect(textElement).toBeInTheDocument();
	});

	it("does not renders 'Cart is empty' if there are items at cart", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(
			async () =>
				await render(
					<CartProvider>
						<Product />
						<Cart />
					</CartProvider>
				)
		);

		const addToCartButton = screen.getByRole("button", { name: /add to cart/i });

		await userEvent.click(addToCartButton);

		const textElement = screen.queryByText("Cart is empty");

		expect(textElement).not.toBeInTheDocument();
	});

	it("renders items", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(
			async () =>
				await render(
					<CartProvider>
						<Product />
						<Cart />
					</CartProvider>
				)
		);

		const textElement = screen.getByRole("listitem");

		expect(textElement).toBeInTheDocument();
	});

	it("increment item amount", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(
			async () =>
				await render(
					<CartProvider>
						<Product />
						<Cart />
					</CartProvider>
				)
		);
		const increaseAmountButton = screen.getByRole("button", {
			name: /\+/i,
		});

		await userEvent.click(increaseAmountButton);

		const textElement = screen.getByText("x 2");

		expect(textElement).toBeInTheDocument();
	});

	it("decrement item amount", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(
			async () =>
				await render(
					<CartProvider>
						<Product />
						<Cart />
					</CartProvider>
				)
		);

		const decreaseAmountButton = screen.getByRole("button", {
			name: /−/i,
		});

		await userEvent.click(decreaseAmountButton);

		const textElement = screen.getByText("x 1");

		expect(textElement).toBeInTheDocument();
	});

	it("clear cart after order", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(
			async () =>
				await render(
					<CartProvider>
						<Product />
						<Cart />
					</CartProvider>
				)
		);

		const orderButton = screen.getByRole("button", { name: /order/i });

		await userEvent.click(orderButton);

		const textElement = screen.queryByRole("listitem");

		expect(textElement).not.toBeInTheDocument();
	});
});
