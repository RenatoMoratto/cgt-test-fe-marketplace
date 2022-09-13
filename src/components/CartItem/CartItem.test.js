import { render, screen } from "@testing-library/react";
import CartItem from "./index";
import imageA from "../../api/public/images/1.jpg";

const cardImage = <CartItem name="John Doe" price={19.9} amount={2} image={imageA} />;

describe("CartItem component", () => {
	it("renders a image with the alt text 'John Doe'", () => {
		render(cardImage);

		const imageElement = screen.getByAltText("John Doe");

		expect(imageElement).toBeInTheDocument();
	});

	it("renders John Doe as the name", () => {
		render(cardImage);

		const outputElement = screen.getByText("John Doe");

		expect(outputElement).toBeInTheDocument();
	});

	it("renders $19.90 as the price", () => {
		render(cardImage);

		const outputElement = screen.getByText("$19.90");

		expect(outputElement).toBeInTheDocument();
	});

	it("renders 2 as the amount", () => {
		render(cardImage);

		const outputElement = screen.getByText("x 2");

		expect(outputElement).toBeInTheDocument();
	});
});
