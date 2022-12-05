import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, ApodGallery, MARS, Search } from './pages';
import { NavLink } from './components';
import fetchAPI from './Data/fetchAPI';
import { initializeState, primaryStateReducer } from './Reducer/dataReducer';
import { initialSearchQueryState, searchQueryReducer } from './Reducer/searchQueryReducer';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


// for rover detail --> spirit, Curiosity, Opportunity
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/?api_key=DEMO_KEY 
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-01-05&page=2&api_key=DEMO_KEY

const App = () => {
    const [state, dispatch] = useReducer(primaryStateReducer, initializeState);
    const [searchState, searchDispatch] = useReducer(searchQueryReducer, initialSearchQueryState);
    const [openMenu, setOpenMenu] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    function handleOpenMenu() {
        setOpenMenu(prevState => !prevState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submited!!!1');
        searchDispatch({type: 'VALIDATE'});
    }

    useEffect(() => {
        dispatch({type: 'INIT_LOCAL_STORAGE'});
    }, []);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetchAPI('planetary/apod', signal)
    //         .then(res => {
    //             dispatch({type: 'UPDATE_ASTRONOMY_PICTURE_OF_THE_DAY', payload: res});
    //         })
    //         .catch(err => {
    //             console.log('err  :', err);
    //         })

    //     return () => {
    //         controller.abort();
    //     }
    // }, []);

    useEffect(() => {
        console.log(searchState)
    }, [searchState]);

    useEffect(() => {
        // console.log('-------------------');
        // console.log('state changed!!');
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

                {matches && <NavLink openMenu={openMenu} />}

                <Routes>
                    <Route path="/" exact element={
                        <Home 
                            apod={state.astronomyPicOfTheDay[state.astronomyPicOfTheDay.length - 1]} 
                            handleOpenMenu={handleOpenMenu} 
                            matches={matches}
                        />} 
                    />
                    <Route path="/apod" element={<ApodGallery 
                            // apodList={state.astronomyPicOfTheDay}
                            apodList={[]}
                            handleOpenMenu={handleOpenMenu} 
                            matches={matches}  
                        />} 
                    />
                    <Route path="/search" element={<Search 
                            apodList={[]}
                            handleOpenMenu={handleOpenMenu} 
                            matches={matches} 
                            searchState={searchState}
                            searchDispatch={searchDispatch}
                            handleSubmit={handleSubmit}
                        />}
                    />
                    <Route path="/rovers" element={<MARS 
                            handleOpenMenu={handleOpenMenu} 
                            matches={matches} 
                        />} 
                    />
                </Routes>

            </Container >
        </BrowserRouter>
    );
}
 
export default App;