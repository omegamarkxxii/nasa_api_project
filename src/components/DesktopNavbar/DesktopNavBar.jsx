import {Link as RouterLink} from 'react-router-dom';
import { AppBar,Box,Toolbar,IconButton } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BreadCrumbDesktop from '../BreadCrumbDesktop/BreadCrumbDesktop';
import style from './style';

const DesktopNavbar = () => {
    return ( 
        <Box component={"nav"}>
            <AppBar position="fixed" sx={style.base}>
                <Toolbar>
                    <Box sx={style.logoWrapper}>
                        <IconButton component={RouterLink} to="/" aria-label="home icon">
                            <RocketLaunchIcon color="primary" fontSize="medium" />
                        </IconButton>
                    </Box>
                    <Box>
                        <BreadCrumbDesktop />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default DesktopNavbar;