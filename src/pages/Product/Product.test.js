import { act, render, screen } from "@testing-library/react";
import Product from "./index";

const mockResponse = {
	id: 1,
	name: "Product A",
	price: 10,
	description: "Product A description",
	image: require("../../api/public/images/1.jpg"),
};

describe("Product page", () => {
	it("renders 'Loading...' on first render", () => {
		render(<Product />);

		const textElement = screen.getByText("Loading...");

		expect(textElement).toBeInTheDocument();
	});

	test("if 'Loading...' is no longer present in DOM", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(async () => await render(<Product />));

		const textElement = screen.queryByText("Loading...");

		expect(textElement).not.toBeInTheDocument();
	});

	it("renders product after loading", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(async () => await render(<Product />));

		const textElement = screen.getByText("Product A");

		expect(textElement).toBeInTheDocument();
	});
});
