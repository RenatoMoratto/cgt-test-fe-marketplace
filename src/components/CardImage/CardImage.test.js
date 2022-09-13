import { render, screen } from "@testing-library/react";
import CardImage from "./index";
import imageA from "../../api/public/images/1.jpg";

const cardImage = <CardImage href="/products?id=1" name="John Doe" price={19.9} image={imageA} />;

describe("CardImage component", () => {
	it("renders a link that have href value equals to '/products?id=1'", () => {
		render(cardImage);

		const linkElement = screen.getByRole("link");

		expect(linkElement).toHaveAttribute("href", "/products?id=1");
	});

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
});
