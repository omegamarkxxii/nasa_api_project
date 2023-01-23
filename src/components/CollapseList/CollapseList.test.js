import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import CollapseList from "./CollapseList";

const HEADING = "NASA ROVERS";
const LIST_BUTTONS = [
    { name: "Curiosity", id: 0 },
    { name: "Opportunity", id: 1 },
    { name: "Spirit", id: 2 }
];
                  

test("should render on page", () => {
    render(<CollapseList listButtons={[]} />);
    const collapseElement = screen.getByRole("navigation");
    expect(collapseElement).toBeInTheDocument();
})

test("heading should have text content", () => {
    render(<CollapseList collapseListHeading={HEADING} listButtons={[]} />);
    const textElement = screen.getByText(HEADING);
    expect(textElement).toBeInTheDocument();
})

test("initial page load should have expand more icon", () => {
    render(<CollapseList collapseListHeading={HEADING} listButtons={[]} />);
    const expandMoreIcon = screen.getByTestId("ExpandMoreIcon");
    expect(expandMoreIcon).toBeInTheDocument();
})

test("should change icon to expand less when button clicked", async () => {
    user.setup();
    render(<CollapseList collapseListHeading={HEADING} listButtons={[]} />);
    const buttonElement = screen.getByRole("button", {name: HEADING});
    await user.click(buttonElement);
    const expandLessIcon = screen.getByTestId("ExpandLessIcon");
    expect(expandLessIcon).toBeInTheDocument();
})

test("should correct text contexts after list is collapsed", async () => {
    user.setup();
    render(<CollapseList collapseListHeading={HEADING} listButtons={LIST_BUTTONS} />);
    const buttonElement = screen.getByRole("button", {name: HEADING});
    await user.click(buttonElement);
    const buttonElement_1 = screen.getByRole("button", {name: LIST_BUTTONS[0].name});
    const buttonElement_2 = screen.getByRole("button", {name: LIST_BUTTONS[1].name});
    const buttonElement_3 = screen.getByRole("button", {name: LIST_BUTTONS[2].name});
    expect(buttonElement_1).toHaveTextContent(LIST_BUTTONS[0].name);
    expect(buttonElement_2).toHaveTextContent(LIST_BUTTONS[1].name);
    expect(buttonElement_3).toHaveTextContent(LIST_BUTTONS[2].name);
})

test("should called onClick function", async () => {
    user.setup();
    const mockFn = jest.fn();
    render(<CollapseList collapseListHeading={HEADING} listButtons={LIST_BUTTONS} setID={mockFn} />);
    const buttonElement = screen.getByRole("button", {name: HEADING});
    await user.click(buttonElement);
    const buttonElement_1 = screen.getByRole("button", {name: LIST_BUTTONS[0].name});
    await user.click(buttonElement_1);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
})

