import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import MobileDrawer from "./MobileDrawer";
import FormContextProvider from "../../context/FormContext/FormContextProvider";

const INITIAL_FORM_STATE = {
    id: 'astronomypicoftheday',
    year: '1996',
    month: 1,
    day: 1,
    url_path: '',
    search_result: [{
        date: "2004-10-01",
        id: 250972,
        name: "Opportunity",
        title: "Panoramic Camera",
        url: "http://mars.nasa.gov/mer/gallery/all/1/p/244/1P149844763EFF3600P2427L2M1-BR.JPG"
    }]
};


test("should render correctly", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE}>
            <MobileDrawer dispatch={mockDispatch} />
        </FormContextProvider>
    )
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
})

test("should render correctly", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE}>
            <MobileDrawer dispatch={mockDispatch} />
        </FormContextProvider>
    )
    const imgBoxElement = screen.getByTestId("image-box");
    expect(imgBoxElement).toBeInTheDocument();
})

test("should render correctly", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE}>
            <MobileDrawer dispatch={mockDispatch} />
        </FormContextProvider>
    )
    const imgBoxElement = screen.getByTestId("image-box");
    expect(imgBoxElement).toHaveTextContent(INITIAL_FORM_STATE.search_result[0].title);
    expect(imgBoxElement).toHaveTextContent(INITIAL_FORM_STATE.search_result[0].name);
})

test("should render correct image src", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE}>
            <MobileDrawer dispatch={mockDispatch} />
        </FormContextProvider>
    )
    const imgElement = screen.getByRole("img", {alt: "Panoramic Camera"});
    expect(imgElement).toBeInTheDocument();
})

test("should render image modal on click", async () => {
    const mockDispatch = jest.fn();
    user.setup();
    render(
        <FormContextProvider formState={INITIAL_FORM_STATE}>
            <MobileDrawer dispatch={mockDispatch} />
        </FormContextProvider>
    )
    const imgElement = screen.getByRole("img", {alt: "Panoramic Camera"});
    await user.click(imgElement);
    const imgModalElement = screen.getByTestId("image-modal");
    expect(imgModalElement).toBeInTheDocument();
})