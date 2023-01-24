import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopNavbar from "./DesktopNavBar";
import MARS from "../../pages/Mars/Mars";

test("should render correctly", () => {
    render(
        <MemoryRouter>
            <DesktopNavbar />
        </MemoryRouter>
    );
    const navbarElement = screen.getByTestId("desktop-navbar");
    expect(navbarElement).toBeInTheDocument();
})

test("breadcrumb component should be in the document", () => {
    render(
        <MemoryRouter>
            <DesktopNavbar />
        </MemoryRouter>
    );
    const breadCrumbElement = screen.getByRole("presentation");
    expect(breadCrumbElement).toBeInTheDocument();
})

test("home rocket icon should be in the document", () => {
    render(
        <MemoryRouter>
            <DesktopNavbar />
        </MemoryRouter>
    );
    const iconElement = screen.getByTestId("RocketLaunchIcon");
    expect(iconElement).toBeInTheDocument();
})

test("should navigate to home page on click", async () => {
    user.setup();
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <DesktopNavbar />} />
                <Route path="/rovers" element={ <MARS  />} />
            </Routes>
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Rovers/});
    await user.click(link);
    expect(window.location.pathname).toMatch(/\/rovers/);
    const homeLink = screen.getByRole("link", {name: "home icon"});
    await user.click(homeLink);
    expect(window.location.pathname).toMatch(/\//);
})