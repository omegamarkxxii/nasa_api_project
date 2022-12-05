import { BaseNavBar, DesktopDrawer} from "../components";
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';


const Search = ({apodList, handleOpenMenu, matches, searchState, searchDispatch, handleSubmit}) => {
    // const theme = useTheme();
    // const mobileScreen = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
       <>
            {/* {!mobileScreen && <BaseNavBar handleOpenMenu={handleOpenMenu} matches={matches} />}
            {mobileScreen === true ? <MobileDrawer /> : <DesktopDrawer />} */}

            <BaseNavBar handleOpenMenu={handleOpenMenu} matches={matches} />
            <DesktopDrawer 
                apodList={apodList} 
                searchState={searchState} 
                searchDispatch={searchDispatch} 
                handleSubmit={handleSubmit}
             />
       </>
    );
}
 
export default Search;