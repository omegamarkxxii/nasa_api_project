import FormStateContext from "./FormStateContext";
import FormSetValueContext from './FormSetValueContext';
import HandleFormSubmitContext from './HandleFormSubmitContext';

const FormContextProvider = ({formState, setFormValue, handleFormSubmit, children}) => {
    return ( 
        <FormStateContext.Provider value={formState}>
            <FormSetValueContext.Provider value={setFormValue}>
                <HandleFormSubmitContext.Provider value={handleFormSubmit}>
                    {children}
                </HandleFormSubmitContext.Provider>
            </FormSetValueContext.Provider>
        </FormStateContext.Provider>
    );
}
 
export default FormContextProvider;