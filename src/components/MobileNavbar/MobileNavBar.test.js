import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MobileNavBar from "./MobileNavBar";

test("should render correctly", () => {
    render(
        <MemoryRouter>
            <MobileNavBar />
        </MemoryRouter>
    );
    const mobileNavBarElement = screen.getByTestId("mobile-nav-bar");
    expect(mobileNavBarElement).toBeInTheDocument();
})

test("should render icons", () => {
    render(
        <MemoryRouter>
            <MobileNavBar />
        </MemoryRouter>
    );
    const homeIcon = screen.getByTestId(/RocketLaunchIcon/);
    const infoIcon = screen.getByTestId(/InfoIcon/);
    const colectionIcon = screen.getByTestId(/CollectionsIcon/);
    const searchIcon = screen.getByTestId(/SearchIcon/);
    expect(homeIcon).toBeInTheDocument();
    expect(infoIcon).toBeInTheDocument();
    expect(colectionIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
})