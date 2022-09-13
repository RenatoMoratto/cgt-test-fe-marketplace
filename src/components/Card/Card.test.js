import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card component", () => {
	render(<Card className="test-card">Card Test</Card>);

	const cardElement = screen.getByText("Card Test");

	it("renders the card's children", () => {
		expect(cardElement).toBeInTheDocument();
	});

	it("receives className", () => {
		expect(cardElement).toHaveClass("test-card");
	});
});
