import { render, screen } from "@testing-library/react";
import Button from "./index";

test("render the button's children", () => {
	render(<Button>Button Test</Button>);

	const outputElement = screen.getByText("Button Test");
	expect(outputElement).toBeInTheDocument();
});
