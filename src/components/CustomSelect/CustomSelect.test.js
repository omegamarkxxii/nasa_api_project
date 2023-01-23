import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import CustomSelect from "./CustomSelect";
import FormContextProvider from "../../context/FormContext/FormContextProvider";

const VALUE = "astronomypicoftheday";
const NAME = "id";
const SELECT_PARAMS = {
    title: "target",
    InputLabel: "target-select-label",
    id: "target-select",
    labelID: "target-select-label",
    label: "target",
    list: ['astronomypicoftheday','spirit','opportunity', 'curiosity'],
    width: 120
};

test("should render correctly", () => {
    render(<CustomSelect select={SELECT_PARAMS} value={VALUE} name={NAME}  />);
    const selectElement = screen.getByTestId("custom-select");
    expect(selectElement).toBeInTheDocument();
})

test("text content target should be in the document", () => {
    render(<CustomSelect select={SELECT_PARAMS} value={VALUE} name={NAME}  />);
    const selectElement = screen.getByTestId("custom-select");
    expect(selectElement).toHaveTextContent(/target/i);
})

test("default select value should be astronomypicoftheday", () => {
    render(<CustomSelect select={SELECT_PARAMS} value={VALUE} name={NAME}  />);
    const selectElement = screen.getByTestId("custom-select");
    expect(selectElement).toHaveTextContent(/astronomypicoftheday/i);
})

test("should open drop down menu on button click", async () => {
    user.setup();
    render(<CustomSelect select={SELECT_PARAMS} value={VALUE} name={NAME}  />);
    const buttonElement = screen.getByRole("button", {name: VALUE});
    await user.click(buttonElement);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(4);
})

test("should change value to opportunity on select click", async () => {
    user.setup();
    const mockFn = jest.fn();
    render(
        <FormContextProvider setFormValue={mockFn}>
            <CustomSelect select={SELECT_PARAMS} value={VALUE} name={NAME}  />
        </FormContextProvider>
    );
    const buttonElement = screen.getByRole("button", {name: VALUE});
    await user.click(buttonElement);
    const liElement = screen.getByRole("option", {name: "opportunity"});
    await user.click(liElement);
    const targetLabel = screen.getByRole("button");
    expect(targetLabel).toHaveTextContent(/opportunity/i);
})