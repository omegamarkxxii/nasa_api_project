import {Link as RouterLink} from 'react-router-dom';
import { AppBar,Box,Toolbar,IconButton } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BreadCrumbDesktop from '../BreadCrumbDesktop/BreadCrumbDesktop';
import BreadCrumbMobile from '../BreadCrumbMobile/BreadCrumbMobile';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import style from './style';

const BaseNavBar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
        <Box sx={style.box}>
            <AppBar position="fixed" sx={style.root}  >
                <Toolbar variant="regular" disableGutters>
                    {/* main logo */}
                    <Box sx={style.box}>
                        <IconButton component={RouterLink} to={'/'} edge="start" aria-label="home" sx={style.iconBtn} >
                            <RocketLaunchIcon fontSize="medium" />
                        </IconButton>
                    </Box>


                    {/* home / mars-phote / apod --> link tags */}
                    {!matches === true ? <BreadCrumbDesktop/> : <BreadCrumbMobile />}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default BaseNavBar;