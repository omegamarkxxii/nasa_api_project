import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DesktopDrawer from "./DesktopDrawer";
import FormContextProvider from "../../context/FormContext/FormContextProvider";

const INITIAL_FORM_VALUE = {
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


test("render correctly on page", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_VALUE}>
            <DesktopDrawer dispatch={ mockDispatch } />
        </FormContextProvider>
    );
    const desktopElement = screen.getByTestId("desktop-drawer");
    expect(desktopElement).toBeInTheDocument();
})

test("page should have correct heading", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_VALUE}>
            <DesktopDrawer dispatch={ mockDispatch } />
        </FormContextProvider>
    );
    const headingElement = screen.getByTestId("resource-caption");
    expect(headingElement).toHaveTextContent(/Resources from NASA OPEN API/i);
})

test("page should have rendered form element", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_VALUE}>
            <DesktopDrawer dispatch={ mockDispatch } />
        </FormContextProvider>
    );
    screen.debug();
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
})

test("page should render image gallery", () => {
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_VALUE}>
            <DesktopDrawer dispatch={ mockDispatch } />
        </FormContextProvider>
    );
    const imgGalleryElement = screen.getByTestId("image-gallery");
    expect(imgGalleryElement).toBeInTheDocument();
})

test("on click on image, page should render image modal", async () => {
    user.setup();
    const mockDispatch = jest.fn();
    render(
        <FormContextProvider formState={INITIAL_FORM_VALUE}>
            <DesktopDrawer dispatch={ mockDispatch } />
        </FormContextProvider>
    );
    const imgElement = screen.getByAltText("Panoramic Camera");
    await user.click(imgElement);
    const imgModalElement = screen.getByTestId("image-modal");
    expect(imgModalElement).toBeInTheDocument();
})