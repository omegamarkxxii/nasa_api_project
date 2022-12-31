import {Link as RouterLink} from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box, AppBar, Slide, Toolbar, CssBaseline, IconButton, Tooltip } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import style from './style';


const HideOnScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const MobileNavBar = () => {
    return ( 
        <>
            <CssBaseline />
            <HideOnScroll>
                <AppBar sx={style.base}>
                    <Toolbar>
                        <Box sx={style.logoWrapper}>
                            <IconButton component={RouterLink} to="/" aria-label="home button">
                                    <RocketLaunchIcon color="primary" fontSize="small" />
                            </IconButton>
                        </Box>
                            <Tooltip title="rover info">
                                <IconButton component={RouterLink} to="/rovers" aria-label="info button" sx={style.icnBtn}>
                                    <InfoIcon color="primary" fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="gallery">
                                <IconButton component={RouterLink} to="/apod" aria-label="gallery button" sx={style.icnBtn}>
                                    <CollectionsIcon color="primary" fontSize="small" />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="search image">
                                <IconButton component={RouterLink} to="/search" aria-label="search button" sx={style.icnBtn}>
                                    <SearchIcon color="primary" fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        <Box>

                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    );
}
 
export default MobileNavBar;