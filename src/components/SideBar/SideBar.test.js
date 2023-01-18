import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import SideBar from "./SideBar";

const SIDE_BAR_HEADING ="NASA ROVERS";
const BUTTONS = [
    { name: "Curiosity", id: 0 },
    { name: "Opportunity", id: 1 },
    { name: "Spirit", id: 2 }
];

test("should render on page", () => {
    render(<SideBar buttons={[]} />);
    const sideBarElement = screen.getByTestId("side-bar");
    expect(sideBarElement).toBeInTheDocument();
})

test("should render side bar heading text", () => {
    render(<SideBar sideBarHeading={SIDE_BAR_HEADING} buttons={[]} />);
    const headingElement = screen.getByRole("heading", {level: 6});
    expect(headingElement).toHaveTextContent(SIDE_BAR_HEADING);
})

test("should render button list", () => {
    render(<SideBar buttons={BUTTONS} />);
    const buttonListEle = screen.getAllByRole("button");
    expect(buttonListEle[0]).toBeInTheDocument();
    expect(buttonListEle[0]).toHaveTextContent(BUTTONS[0].name);
    expect(buttonListEle[1]).toBeInTheDocument();
    expect(buttonListEle[1]).toHaveTextContent(BUTTONS[1].name);
    expect(buttonListEle[2]).toBeInTheDocument();
    expect(buttonListEle[2]).toHaveTextContent(BUTTONS[2].name);
})

describe("side bar buttons click", () => {
    user.setup();
    const mockFn = jest.fn();
    beforeEach(() => {mockFn.mockClear()});

    it("when button 1 is clicked should called onClick function", async () => {
        render(<SideBar sideBarHeading={SIDE_BAR_HEADING} buttons={BUTTONS} setID={mockFn} />);
        const buttonListEle = screen.getAllByRole("button");
        await user.click(buttonListEle[0]);
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toBeCalledTimes(1);
    })

    it("when button 2 is clicked should called onClick function", async () => {
        render(<SideBar sideBarHeading={SIDE_BAR_HEADING} buttons={BUTTONS} setID={mockFn} />);
        const buttonListEle = screen.getAllByRole("button");
        await user.click(buttonListEle[1]);
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toBeCalledTimes(1);
    })

    it("when button 3 is clicked should called onClick function", async () => {
        render(<SideBar sideBarHeading={SIDE_BAR_HEADING} buttons={BUTTONS} setID={mockFn} />);
        const buttonListEle = screen.getAllByRole("button");
        await user.click(buttonListEle[2]);
        expect(mockFn).toHaveBeenCalled();
        expect(mockFn).toBeCalledTimes(1);
    })
})