import { render, screen } from "@testing-library/react";
import MobileSearchBar from "./MobileSearchBar";
import FormContextProvider from "../../context/FormContext/FormContextProvider";


const INITIAL_FORM_STATE = {
    id: 'astronomypicoftheday',
    year: '1996',
    month: 1,
    day: 1,
    url_path: '',
    search_result: []
}

test("renders correctly", () => {
    const mockFn = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE} handleFormSubmit={mockFn}>
            <MobileSearchBar />
        </FormContextProvider>
    );
    const mobileSearchBarElement = screen.getByTestId("mobile-search-bar");
    expect(mobileSearchBarElement).toBeInTheDocument();
})

test("should render a submit button", () => {
    const mockFn = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE} handleFormSubmit={mockFn}>
            <MobileSearchBar />
        </FormContextProvider>
    );
    const buttonElement = screen.getByRole("button", {name: "Search"});
    expect(buttonElement).toBeInTheDocument();
})

test("should render a submit button", () => {
    const mockFn = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE} handleFormSubmit={mockFn}>
            <MobileSearchBar />
        </FormContextProvider>
    );
    const mobileSearchBarElement = screen.getByTestId("mobile-search-bar");
    expect(mobileSearchBarElement).toHaveTextContent("Resources from NASA OPEN API");
})