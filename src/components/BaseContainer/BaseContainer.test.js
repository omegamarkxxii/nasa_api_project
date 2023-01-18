import { render, screen } from "@testing-library/react";
import BaseContainer from "./BaseContainer";


test("should render in document", () => {
    render(<BaseContainer />);
    const element = screen.getByTestId("base-wrapper");
    expect(element).toBeInTheDocument();
})

test("should render children", () => {
    render(<BaseContainer> <p>container children</p>  </BaseContainer>);
    const paraElement = screen.getByText(/^container children$/i);
    expect(paraElement).toBeInTheDocument();
})