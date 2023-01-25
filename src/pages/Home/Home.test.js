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

// test("should make a get request and render a astronomy picture of the day", () => {
//     render(
//         <MemoryRouter>
//             <Home />
//         </MemoryRouter>
//     );
//     screen.debug();
// })