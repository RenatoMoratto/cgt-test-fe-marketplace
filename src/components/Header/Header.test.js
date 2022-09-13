import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
	it("renders number of cart items", () => {
		render(<Header />);

		const textElement = screen.getByText("0");

		expect(textElement).toBeInTheDocument();
	});
});
