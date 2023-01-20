import {render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { MemoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import BreadCrumbDesktop from "./BreadCrumbDesktop";
import MARS from "../../pages/Mars/Mars";
import Gallery from "../../pages/Gallery/Gallery";
import Search from "../../pages/Search/search";
import FormContextProvider from "../../context/FormContext/FormContextProvider";
import initialFormState from "../../Constants/InitialFormState";


test("should render on page", () => { 
    render(
        <MemoryRouter>
            <BreadCrumbDesktop />
        </MemoryRouter>
    );
    const breadElement = screen.getByRole("presentation");
    expect(breadElement).toBeInTheDocument();
})

test("should have correct text content for links", () => { 
    render(
        <MemoryRouter>
            <BreadCrumbDesktop />
        </MemoryRouter>
    );
    const listElements = screen.getAllByRole("listitem");
    expect(listElements[0]).toHaveTextContent(/^Rovers$/i);
    expect(listElements[1]).toHaveTextContent(/^Gallery$/i);
    expect(listElements[2]).toHaveTextContent(/^Search$/i);
})

test("should have correct icons for link tags", () => { 
    render(
        <MemoryRouter>
            <BreadCrumbDesktop />
        </MemoryRouter>
    );
    const infoIconEle = screen.getByTestId("InfoIcon");
    expect(infoIconEle).toBeInTheDocument();

    const collectionIconEle = screen.getByTestId("CollectionsIcon");
    expect(collectionIconEle).toBeInTheDocument();

    const searchIconEle = screen.getByTestId("SearchIcon");
    expect(searchIconEle).toBeInTheDocument();

})

test("path should be /rovers", async () => { 
    user.setup();
    render(
        <BrowserRouter>
            <BreadCrumbDesktop />
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Rovers/});
    await user.click(link);
    expect(window.location.pathname).toMatch(/\/rovers/);
})

test("path should be /apod", async () => { 
    user.setup();
    render(
        <BrowserRouter>
            <BreadCrumbDesktop />
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Gallery/});
    await user.click(link);
    expect(window.location.pathname).toMatch(/\/apod/);
})

test("path should be /search", async () => { 
    user.setup();
    render(
        <BrowserRouter>
            <BreadCrumbDesktop />
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Search/});
    await user.click(link);
    expect(window.location.pathname).toMatch(/\/search/);
})


test("should navigate to /rovers page", async () => { 
    user.setup();
    const monkFn = jest.fn();
    const mockDispatch = jest.fn();
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BreadCrumbDesktop />} />
                <Route path="/rovers" element={ <MARS  />} />
                <Route path="/apod" element={<Gallery
                    dispatch={mockDispatch}
                    list={[]}
                />} />
                <Route path="/search" element={
                    <FormContextProvider
                        formState={initialFormState}
                        setFormValue={monkFn}
                        handleFormSubmit={monkFn}
                    >
                        <Search dispatch={mockDispatch} /> 
                    </FormContextProvider>
                }/>
            </Routes>
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Rovers/});
    await user.click(link);
    const roverDivElement = screen.getByTestId("rover-page");
    expect(roverDivElement).toBeInTheDocument();
})

test("should navigate to /search page", async () => { 
    user.setup();
    const monkFn = jest.fn();
    const mockDispatch = jest.fn();
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BreadCrumbDesktop />} />
                <Route path="/rovers" element={ <MARS  />} />
                <Route path="/apod" element={<Gallery
                    dispatch={mockDispatch}
                    list={[]}
                />} />
                <Route path="/search" element={
                    <FormContextProvider
                        formState={initialFormState}
                        setFormValue={monkFn}
                        handleFormSubmit={monkFn}
                    >
                        <Search dispatch={mockDispatch} /> 
                    </FormContextProvider>
                }/>
            </Routes>
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Search/});
    await user.click(link);
    const headingElement = screen.getByRole("heading", {level: 6, name: "Resources from NASA OPEN API"});
    expect(headingElement).toHaveTextContent(/^Resources from NASA OPEN API$/i);
})

test("should navigate to /gallery page", async () => { 
    user.setup();
    const monkFn = jest.fn();
    const mockDispatch = jest.fn();
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BreadCrumbDesktop />} />
                <Route path="/rovers" element={ <MARS  />} />
                <Route path="/apod" element={<Gallery
                    dispatch={mockDispatch}
                    list={[]}
                />} />
                <Route path="/search" element={
                    <FormContextProvider
                        formState={initialFormState}
                        setFormValue={monkFn}
                        handleFormSubmit={monkFn}
                    >
                        <Search dispatch={mockDispatch} /> 
                    </FormContextProvider>
                }/>
            </Routes>
        </BrowserRouter>
    );

    const link = screen.getByRole("link", {name: /Gallery/});
    await user.click(link);
    const galleryDivElement = screen.getByTestId("gallery-page");
    expect(galleryDivElement).toBeInTheDocument();
})