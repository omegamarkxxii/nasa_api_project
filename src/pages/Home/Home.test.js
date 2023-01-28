import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

test("render correctly", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
})