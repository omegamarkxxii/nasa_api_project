import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home, ApodGallery, SearchApod } from './pages';
import { NavLink } from './components';
import fetchAPI from './Data/fetchAPI';
import { initializeState, primaryStateReducer } from './Reducer/dataReducer';
import { Container } from '@mui/material';


const App = () => {
    const [state, dispatch] = useReducer(primaryStateReducer, initializeState);
    const [openMenu, setOpenMenu] = useState(true);

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

                <NavLink openMenu={openMenu} />

                <Routes>
                    <Route path="/" exact element={
                        <Home 
                            apod={state.astronomyPicOfTheDay[state.astronomyPicOfTheDay.length - 1]} 
                            handleOpenMenu={handleOpenMenu} 
                        />} 
                    />
                    <Route path="/apod" element={<ApodGallery 
                            apodList={state.astronomyPicOfTheDay}
                            handleOpenMenu={handleOpenMenu}   
                        />} 
                    />
                    <Route path="/search" element={<SearchApod handleOpenMenu={handleOpenMenu}  />} />
                </Routes>

            </Container >
        </BrowserRouter>
    );
}
 
export default App;

/*
date
: 
"2022-10-21"
explanation
: 
"Looking north from southern New Zealand, the Andromeda Galaxy never gets more than about five degrees above the horizon. As spring comes to the southern hemisphere, in late September Andromeda is highest in the sky around midnight though. In a single 30 second exposure this telephoto image tracked the stars to capture the closest large spiral galaxy from Mount John Observatory as it climbed just over the rugged peaks of the south island's Southern Alps. In the foreground, stars are reflected in the still waters of Lake Alexandrina. Also known as M31, the Andromeda Galaxy is one of the brightest objects in the Messier catalog, usually visible to the unaided eye as a small, faint, fuzzy patch. But this clear, dark sky and long exposure reveal the galaxy's greater extent in planet Earth's night, spanning nearly 6 full moons."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/andromeda-over-alps.jpg"
title
: 
"Andromeda in Southern Skies"
url
: 
"https://apod.nasa.gov/apod/image/2210/andromeda-over-alps1100.jpg"

------------------------------------------------------------------------
date
: 
"2022-10-22"
explanation
: 
"Drifting through the Orion Arm of the spiral Milky Way Galaxy, this cosmic cloud by chance echoes the outline of California on the west coast of the United States. Our own Sun also lies within the Milky Way's Orion Arm, only about 1,500 light-years from the California Nebula. Also known as NGC 1499, the classic emission nebula is around 100 light-years long. The California Nebula shines with the telltale reddish glow characteristic of hydrogen atoms recombining with long lost electrons. The electrons have been stripped away, ionized by energetic starlight. Most likely providing the energetic starlight that ionizes much of the nebular gas is the bright, hot star Xi Persei just to the right of the nebula.  A popular target for astrophotographers, this deep image reveals the glowing nebula, obscuring dust, and stars across a 3 degree wide field of view. The California nebula lies toward the constellation Perseus, not far from the Pleiades."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/20221011NGC1499CaliforniaNebula4096.jpg"
title
: 
"NGC 1499: The California Nebula"
url
: 
"https://apod.nasa.gov/apod/image/2210/20221011NGC1499CaliforniaNebula1024.jpg"

------------------------------------------------------------------------
date
: 
"2022-10-24"
explanation
: 
"What are those red clouds surrounding the Andromeda galaxy? This galaxy, M31, is often imaged by planet Earth-based astronomers. As the nearest large spiral galaxy, it is a familiar sight with dark dust lanes, bright yellowish core, and spiral arms traced by clouds of bright blue stars.  A mosaic of well-exposed broad and narrow-band image data, this deep portrait of our neighboring island universe offers strikingly unfamiliar features though, faint reddish clouds of glowing ionized hydrogen gas in the same wide field of view. Most of the ionized hydrogen clouds surely lie in the foreground of the scene, well within our Milky Way Galaxy. They are likely associated with the pervasive, dusty interstellar cirrus clouds scattered hundreds of light-years above our own galactic plane. Some of the clouds, however, occur right in the Andromeda galaxy itself, and some in M110, the small galaxy just below."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/M31Clouds_Fryhover_3054.jpg"
title
: 
"Clouds Around Galaxy Andromeda"
url
: 
"https://apod.nasa.gov/apod/image/2210/M31Clouds_Fryhover_960.jpg"

------------------------------------------------------------------------
date
: 
"2022-10-25"
explanation
: 
"Jupiter and its moons move like our Sun and its planets. Similarly, Jupiter spins while its moons circle around. Jupiter’s rotation can be observed by tracking circulating dark belts and light zones. The Great Red Spot, the largest storm known, rotates to become visible after about 15 seconds in the 48-second time lapse video. The video is a compilation of shorts taken over several nights last month and combined into a digital recreation of how 24-continuous hours would appear. Jupiter's brightest moons always orbit in the plane of the planet's rotation, even as Earth’s spin makes the whole system appear to tilt.  The moons Europa, Ganymede, and Io are all visible, with Europa's shadow appearing as the icy Galilean moon crosses Jupiter's disk.  Jupiter remains near opposition this month, meaning that it is unusually bright, near to its closest to the Earth, and visible nearly all night long.   Almost Hyperspace: Random APOD Generator"
title
: 
"Jupiter Rotates as Moons Orbit"
url
: 
"https://www.youtube.com/embed/juloL5WeLrc?rel=0"

------------------------------------------------------------------------
date
: 
"2022-10-26"
explanation
: 
"When does a nebula look like a comet?  In this crowded starfield, covering over two degrees within the high flying constellation of the Swan (Cygnus), the eye is drawn to the Cocoon Nebula. A compact star forming region, the cosmic Cocoon punctuates a nebula bright in emission and reflection on the left, with a long trail of interstellar dust clouds to the right, making the entire complex appear a bit like a comet. Cataloged as IC 5146, the central bright head of the nebula spans about 10 light years, while the dark dusty tail spans nearly 100 light years.  Both are located about 2,500 light years away. The bright star near the bright nebula's center, likely only a few hundred thousand years old, supplies power to the nebular glow as it helps clear out a cavity in the molecular cloud's star forming dust and gas. The long dusty filaments of the tail, although dark in this visible light image, are themselves hiding stars in the process of formation, stars that can be seen at infrared wavelengths."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/CocoonWide_Ermolli_5937.jpg"
title
: 
"Cocoon Nebula Wide Field"
url
: 
"https://apod.nasa.gov/apod/image/2210/CocoonWide_Ermolli_960.jpg"

------------------------------------------------------------------------
date
: 
"2022-10-28"
explanation
: 
"History's first known periodic comet Halley (1P/Halley) returns to the inner Solar System every 75 years or so. The famous comet made its last appearance to the naked-eye in 1986. But dusty debris from Comet Halley can be seen raining through planet Earth's skies twice a year during two annual meteor showers, the Eta Aquarids in May and the Orionids in October. Including meteors near the shower maximum on October 21, this composite view compiles Orionid meteors captured from years 2015 through 2022. About 47 bright meteors are registered in the panoramic night skyscape. Against a starry background extending along the Milky Way, the Orionid meteors all seem to radiate from a point just north of Betelgeuse in the familiar constellation of the Hunter. In the foreground are mountains in eastern Slovakia near the city of Presov."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/2016-2022_Orionids_Pano_1500px.png"
title
: 
"Seven Years of Halley Dust"
url
: 
"https://apod.nasa.gov/apod/image/2210/2016-2022_Orionids_Pano_1100px_0.jpg"

------------------------------------------------------------------------

date
: 
"2022-10-29"
explanation
: 
"Part of a dark expanse that splits the crowded plane of our Milky Way galaxy, the Aquila Rift arcs through planet Earth's skies near bright star Altair. In eerie silhouette against the Milky Way's faint starlight, its dusty molecular clouds likely contain raw material to form hundreds of thousands of stars and astronomers search the dark clouds for telltale signs of star birth. This telescopic close-up looks toward the region at a fragmented Aquila dark cloud complex identified as LDN 673, stretching across a field of view slightly wider than the full moon. In the scene, visible indications of energetic outflows associated with young stars include the small red tinted nebulosity RNO 109 above and right of center, and Herbig-Haro object HH32 below. These dark clouds might look scary, but they're estimated to be some 600 light-years away. At that distance, this field of view spans about 7 light-years."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/LDN673.jpg"
title
: 
"LDN 673: Dark Clouds in Aquila"
url
: 
"https://apod.nasa.gov/apod/image/2210/LDN673_1024.jpg"
------------------------------------------------------------------------
date
: 
"2022-10-30"
explanation
: 
"What spooky planet is this? Planet Earth of course, on a dark and stormy night in 2013 at Hverir, a geothermally active area along the volcanic landscape in northeastern Iceland. Triggered by solar activity, geomagnetic storms produced the auroral display in the starry night sky. The ghostly towers of steam and gas are venting from fumaroles and danced against the eerie greenish light. For now, auroral apparitions are increasing as our Sun approaches a maximum in its 11 year solar activity cycle. And pretty soon, ghostly shapes may dance in your neighborhood too."
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/Hverir_Vetter_1300.jpg"
title
: 
"Night on a Spooky Planet"
url
: 
"https://apod.nasa.gov/apod/image/2210/Hverir_Vetter_960.jpg"

------------------------------------------------------------------------
date
: 
"2022-10-31"
explanation
: 
"What is the most spook-tacular nebula in the galaxy?   One contender is LDN 43, which bears an astonishing resemblance to a vast cosmic bat flying amongst the stars on a dark Halloween night.  Located about 1400 light years away in the constellation Ophiuchus, this molecular cloud is dense enough to block light not only from background stars, but from wisps of gas lit up by the nearby reflection nebula LBN 7.  Far from being a harbinger of death, this 12-light year-long filament of gas and dust is actually a stellar nursery.  Glowing with eerie light, the bat is lit up from inside by dense gaseous knots that have just formed young stars.    Celebrate: Halloween With NASA Online"
hdurl
: 
"https://apod.nasa.gov/apod/image/2210/LDN43_SelbyHanson_3993.jpg"
title
: 
"LDN 43: The Cosmic Bat Nebula"
url
: 
"https://apod.nasa.gov/apod/image/2210/LDN43_SelbyHanson_960.jpg"

------------------------------------------------------------------------



*/