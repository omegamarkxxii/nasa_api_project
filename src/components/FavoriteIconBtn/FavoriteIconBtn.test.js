import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import FavoriteIconBtn from "./FavoriteIconBtn";


test("should render button", () => {
    render(<FavoriteIconBtn />);
    const iconBtnElement = screen.getByRole("button");
    expect(iconBtnElement).toBeInTheDocument();
})

test("should render favorite border icon on initial button load", () => {
    render(<FavoriteIconBtn />);
    const iconElement = screen.getByTestId("FavoriteBorderIcon");
    expect(iconElement).toBeInTheDocument();
})

test("should render favorite icon on click", async () => {
    user.setup();
    const mockDispatch = jest.fn();
    render(<FavoriteIconBtn dispatch={mockDispatch} />);
    const iconBtnElement = screen.getByRole("button");
    await user.click(iconBtnElement);
    const iconElement = await screen.findByTestId("FavoriteIcon");
    expect(iconElement).toBeInTheDocument();
})

test("should render favorite border icon on double click", async () => {
    user.setup();
    const mockDispatch = jest.fn();
    render(<FavoriteIconBtn dispatch={mockDispatch} />);
    const iconBtnElement = screen.getByRole("button");
    await user.dblClick(iconBtnElement);
    const iconElement = await screen.findByTestId("FavoriteBorderIcon");
    expect(iconElement).toBeInTheDocument();
})
