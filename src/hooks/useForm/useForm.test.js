import { renderHook, act } from "@testing-library/react";
import useForm from "./useForm";
import initialFormState from "../../Constants/InitialFormState";

test("should have correct initial value", () => {
    const { result } = renderHook(useForm, {initialProps: initialFormState});
    expect(result.current.formState).toEqual(initialFormState);
})

test("should set correct value to form", () => {
    const { result } = renderHook(useForm, {initialProps: initialFormState});

    act(() => {
        result.current.setFormValue("id", "spirit");
    })

    expect(result.current.formState).toEqual({
        id: 'spirit',
        year: '2004',
        month: 1,
        day: 1,
        url_path: '',
        search_result: []
    });
})

test("when form submitted should reset search array & create a new url based on id & date", () => {
    const { result } = renderHook(useForm, {
        initialProps: {
            id: 'curiosity',
            year: '2012',
            month: 8,
            day: 26,
            url_path: '',
            search_result: []
        }
    });

    const e = {
        preventDefault: jest.fn()
    }

    act(() => {
        result.current.handleFormSubmit(e);
    })

    expect(result.current.formState).toEqual({
        id: 'curiosity',
        year: '2012',
        month:8,
        day: 26,
        url_path: `/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2012-8-26&page=1&api_key=${process.env.REACT_APP_NASA_API_KEY}`,
        search_result: []
    });
})