import {render, screen} from "@testing-library/react";
import PaperText from "./PaperText";

test("should render on page", () => {
    render(<PaperText text="text rendered inside paper component" />);
    const headingElement = screen.getByRole("heading", {level: 6});
    expect(headingElement).toBeInTheDocument();
})

test("should render text on page", () => {
    render(<PaperText text="text rendered inside paper component" />);
    const textElement = screen.getByText(/^text rendered inside paper component$/i);
    expect(textElement).toBeInTheDocument();
})