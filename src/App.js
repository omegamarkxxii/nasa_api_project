import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, ApodGallery, SearchApod, MARS } from './pages';
import { NavLink } from './components';
import fetchAPI from './Data/fetchAPI';
import { initializeState, primaryStateReducer } from './Reducer/dataReducer';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const App = () => {
    const [state, dispatch] = useReducer(primaryStateReducer, initializeState);
    const [openMenu, setOpenMenu] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    function handleOpenMenu() {
        setOpenMenu(prevState => !prevState);
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
        console.log('-------------------');
        console.log('state changed!!');
        console.log(state);
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
                            apodList={state.astronomyPicOfTheDay}
                            handleOpenMenu={handleOpenMenu} 
                            matches={matches}  
                        />} 
                    />
                    <Route path="/search" element={<SearchApod 
                            handleOpenMenu={handleOpenMenu} 
                            matches={matches}    
                        />} 
                    />
                    <Route path="/mars" element={<MARS 
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