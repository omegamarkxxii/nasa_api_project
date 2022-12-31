import { useState, useEffect, useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, Gallery, MARS, Search } from './pages';
import { reducer } from './Reducer/reducer';
import getData from './services/api';
import initialLocalState from './Constants/initialLocalState';
import useForm from './hooks/useForm';
import useLocalStorage from './hooks/useLocalStorage';
import FormContextProvider from './context/FormContext/FormContextProvider';


const App = () => {
    const [local, setLocal]= useLocalStorage('nasa-api', initialLocalState);
    const [state, dispatch] = useReducer(reducer, {...local});
    const {formState, setFormValue, handleFormSubmit} = useForm();
    const [astronomyPicOfTheDay, setAstronomyPicOfTheDay] = useState('');


    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     getData('planetary/apod', {method: 'get', signal: signal})
    //         .then(res => res.data)
    //         .then(data => {
    //             setAstronomyPicOfTheDay(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

    //     return () => {
    //         controller.abort();
    //     }
    // }, []);


    useEffect(() => {
        console.log('state', state);
        console.log('local stored');
        console.count();
        setLocal(state);
    }, [state, setLocal]);


    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home apod={ astronomyPicOfTheDay } /> } />
                <Route path="/rovers" element={ <MARS  />} />
                <Route path="/apod" element={<Gallery
                    dispatch={dispatch}
                    list={[...state.astronomypicoftheday]}
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
                {/* <Routes>
                    <Route path="/" exact element={ <Home apod={ astronomyPicOfTheDay } /> } /> */}
                    {/* <Route path="/apod" element={<Gallery 
                            list={[
                                ...state.astronomypicoftheday,
                                ...state.curiosity
                            ]}
                            dispatch={dispatch}
                        />} 
                    />
                    <Route path="/rovers" element={ <MARS  />} />
                    <Route path="/search" element={ 
                        <FormContextProvider 
                            formState={formState} 
                            setFormValue={setFormValue} 
                            handleFormSubmit={handleFormSubmit}
                        >
                            <Search dispatch={dispatch} /> 
                        </FormContextProvider>
                    } /> */}
                {/* </Routes> */}
        </BrowserRouter>
    );
}
 
export default App;