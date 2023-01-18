import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import TextFieldSelect from "./TextFieldSelect";
import searchLabel from "../../Constants/searchLabel";
import FormContextProvider from "../../context/FormContext/FormContextProvider";

const label = searchLabel();

test("should render", () => {
    render(<TextFieldSelect list={[...label['spirit'].years]} />);
    const divElement = screen.getByTestId("text-field-select");
    expect(divElement).toBeInTheDocument();
})

test("input label tag should be year", () => {
    render(<TextFieldSelect list={[...label['astronomypicoftheday'].years]} />);
    const labelElement = screen.getByRole("label");
    expect(labelElement).toHaveTextContent(/^year$/i)
})

test("select field default initial value should be 1996, when target is astronomy picture of the day", () => {
    render(<TextFieldSelect list={[...label['astronomypicoftheday'].years]} />);
    const selectButton = screen.getByRole("button");
    expect(selectButton).toHaveTextContent(/^1996$/i);
})

test("sshould render elect field drop down", async () => {
    user.setup();
    render(<TextFieldSelect list={[...label['astronomypicoftheday'].years]} />);
    const selectButton = screen.getByRole("button");
    await user.click(selectButton);
    const options = screen.getAllByRole("option");
    expect(options[0]).toBeInTheDocument();
    expect(options[1]).toBeInTheDocument();
    expect(options[2]).toBeInTheDocument();
    expect(options[3]).toBeInTheDocument();
})

test("should render correct value in the drop down", async () => {
    user.setup();
    render(<TextFieldSelect list={[...label['astronomypicoftheday'].years]} />);
    const selectButton = screen.getByRole("button");
    await user.click(selectButton);
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveTextContent(/^1996/i);
    expect(options[1]).toHaveTextContent(/^1997/i);
    expect(options[2]).toHaveTextContent(/^1998/i);
    expect(options[3]).toHaveTextContent(/^1999/i);
})

test("should change value to 2000" , async () => {
    user.setup();
    const mockFn = jest.fn();
    render(
        <FormContextProvider setFormValue={mockFn}>
            <TextFieldSelect list={[...label['astronomypicoftheday'].years]} />
        </FormContextProvider>
    );
    let selectButton = screen.getByRole("button");
    await user.click(selectButton);
    const options = screen.getAllByRole("option");
    await user.click(options[4]);
    selectButton = screen.getByRole("button");
    expect(selectButton).toHaveTextContent(/^2000$/i);
})