 import { useState, useEffect, useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, Gallery, MARS, Search } from './pages';
import { reducer } from './Reducer/reducer';
import getData from './services/api';
import initialLocalState from './Constants/initialLocalState';
import initialFormState from './Constants/InitialFormState';
import useForm from './hooks/useForm/useForm';
import useLocalStorage from './hooks/UseLocalStorage/useLocalStorage';
import FormContextProvider from './context/FormContext/FormContextProvider';


const App = () => {
    const [local, setLocal]= useLocalStorage('nasa-api', initialLocalState);
    const [state, dispatch] = useReducer(reducer, {...local});
    const {formState, setFormValue, handleFormSubmit} = useForm(initialFormState);
    const [astronomyPicOfTheDay, setAstronomyPicOfTheDay] = useState('');


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

       getData(`/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`, { signal })
        .then(res =>  res.json())
        .then(data => {
            setAstronomyPicOfTheDay(data);
        })
        .catch(err => {
            console.log(err);
        })

        return () => {
            controller.abort();
        }
    }, []);

    
    useEffect(() => {
        // console.log('state', state);
        // console.log('local stored');
        // console.count();
        setLocal(state);
    }, [state, setLocal]);


    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home apod={ astronomyPicOfTheDay } /> } />
                <Route path="/rovers" element={ <MARS  />} />
                <Route path="/apod" element={<Gallery
                    dispatch={dispatch}
                    list={[
                        ...state.astronomypicoftheday
                    ]}
                />} />
                <Route path="/search" element={
                    <FormContextProvider
                        formState={formState}
                        setFormValue={setFormValue}
                        handleFormSubmit={handleFormSubmit}
                    >
                        <Search dispatch={dispatch} /> 
                    </FormContextProvider>
                }/>
            </Routes>
        </BrowserRouter>
    );
}
 
export default App;