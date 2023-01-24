import {render, screen } from "@testing-library/react";
import DetailTable from "./DetailTable";

const TABLE_CONTENT = [
    { id: "Landing Date", value: "2000-10-25" },
    { id: "Launch Date", value: "1999-3-14" },
    { id: "Status", value: "not active" },
    { id: "Max Sol", value: 4000 },
    { id: "Max Date", value: 2000 },
    { id: "Total Photos", value: 6033 }
];

test("renders correctly", () => {
    render(<DetailTable tableContent={[]}/>);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
})

test("should render table content headings", () => {
    render(<DetailTable tableContent={TABLE_CONTENT}/>);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[0].id);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[1].id);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[2].id);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[3].id);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[4].id);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[5].id);
})

test("should render table content values", () => {
    render(<DetailTable tableContent={TABLE_CONTENT}/>);
    screen.debug();
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[0].value);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[1].value);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[2].value);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[3].value);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[4].value);
    expect(tableElement).toHaveTextContent(TABLE_CONTENT[5].value);
})