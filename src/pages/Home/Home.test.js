import {render, screen} from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import Home from "./Home";

test("render correctly", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
})

// test("when rover link is clicked should navigate to rover page", async () => {
//     render(
//         <BrowserRouter>
//             <Home />
//         </BrowserRouter>
//     );

//     await user.click(screen.getByRole("link", {name: "Rovers"}));
//     screen.debug();
//     console.log(window.location.pathname);
//     const rover = screen.getByRole("rover-wrapper");
// })