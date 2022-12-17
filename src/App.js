import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, ApodGallery, MARS, Search } from './pages';
import { initializeState, primaryStateReducer } from './Reducer/dataReducer';
import { Container } from '@mui/material';
import handleFetch from './Data/handleFetch';
// import SearchResultContext from './context/SearchResultContext';
// import { createLocalStorage, getLocalStorage, updateLocalStorage } from './util';


// for rover detail --> spirit, Curiosity, Opportunity
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/?api_key=DEMO_KEY 
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-01-05&page=2&api_key=DEMO_KEY

// const LOCAL_STORAGE_NAME = 'nasa-data';

const App = () => {
    const [state, dispatch] = useReducer(primaryStateReducer, initializeState);
    // const [local, setLocal] = useState([]);

    useEffect(() => {
        dispatch({type: 'INIT_LOCAL_STORAGE'});
        // createLocalStorage(LOCAL_STORAGE_NAME);
    }, []);

    // useEffect(() => {
    //     if([].length > 0) return;
    //     updateLocalStorage(LOCAL_STORAGE_NAME, local);
    // }, [local]);


    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     handleFetch({url: 'planetary/apod', abortSignal: signal})
    //         .then(res => {
    //             dispatch({type: 'UPDATE_ASTRONOMY_PICTURE_OF_THE_DAY', payload: res});
    //         })
    //         .catch(err => {
    //             console.log('err : ', err);
    //         })

    //     return () => {
    //         controller.abort();
    //     }
    // }, []);


    useEffect(() => {
        // console.log(state);
        dispatch({type: 'UPDATE_LOCAL_STORAGE'});
    }, [state]);


    return ( 
        <BrowserRouter>
            <Container 
                maxWidth="lg"
                disableGutters
                sx={{
                    backgroundColor: "grey.50"
                }}
            >

                <Routes>
                    <Route path="/" exact element={
                        <Home apod={ state.astronomyPicOfTheDay[state.astronomyPicOfTheDay.length - 1] } /> } 
                    />
                    <Route path="/apod" element={<ApodGallery 
                            // apodList={state.astronomyPicOfTheDay}
                            apodList={[]}
                        />} 
                    />
                    <Route path="/rovers" element={<MARS  />} />
                    <Route path="/search" element={
                        // <SearchResultContext.Provider value={}>
                            <Search />
                        // </SearchResultContext.Provider>
                    }/>
                </Routes>

            </Container >
        </BrowserRouter>
    );
}
 
export default App;