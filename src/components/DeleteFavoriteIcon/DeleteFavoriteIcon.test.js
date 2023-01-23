import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DeleteFavoriteIcon from "./DeleteFavoriteIcon";

const ITEM = {
    title: "nasa spirit rover image"
}

test("renders correctly on page", () => {
    const mockDispatch = jest.fn();
    render(<DeleteFavoriteIcon item={ITEM} dispatch={mockDispatch} />)
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
})

test("should have favorite icon in the document", () => {
    const mockDispatch = jest.fn();
    render(<DeleteFavoriteIcon item={ITEM} dispatch={mockDispatch} />)
    const iconElement = screen.getByTestId("FavoriteIcon");
    expect(iconElement).toBeInTheDocument();
})

test("should called on click function", async () => {
    user.setup();
    const mockDispatch = jest.fn();
    render(<DeleteFavoriteIcon item={ITEM} dispatch={mockDispatch} />)
    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
})

