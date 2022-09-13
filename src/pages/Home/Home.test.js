import { act, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from "./index";

const mockResponse = [
	{
		id: 1,
		name: "Product A",
		price: 10,
		description: "Product A description",
		image: require("../../api/public/images/1.jpg"),
	},
];

describe("Home page", () => {
	it("renders 'Loading...' on first render", () => {
		render(<Home />);

		const textElement = screen.getByText("Loading...");

		expect(textElement).toBeInTheDocument();
	});

	test("if 'Loading...' is no longer present in DOM", async () => {
		render(<Home />);

		await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
	});

	it("renders user interested products after loading", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(async () => await render(<Home />));

		const linkElementArray = screen.getAllByRole("link");

		expect(linkElementArray.at(0)).toHaveAttribute("href", "products/user-interests/1");
	});

	it("renders newest products after loading", async () => {
		window.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResponse),
			})
		);

		await act(async () => await render(<Home />));

		const linkElementArray = screen.getAllByRole("link");

		expect(linkElementArray.at(1)).toHaveAttribute("href", "products/newests/1");
	});
});
