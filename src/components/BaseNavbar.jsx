import {Link as RouterLink} from 'react-router-dom';
import { AppBar,Box,Toolbar,IconButton } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BreadCrumbDesktop from './BreadCrumbDesktop';
import BreadCrumbMobile from './BreadCrumbMobile';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const BaseNavBar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="fixed" 
                sx={{
                    color: 'primary.main', 
                    backgroundColor: 'grey.50', 
                    boxShadow: 'none', 
                    borderBottom: '1px solid #e3e3e3'
                }}
                
            >
                <Toolbar variant="regular" disableGutters>
                    {/* main logo */}
                    <Box sx={{flexGrow: 1}}>
                        <IconButton component={RouterLink} to={'/'} edge="start" aria-label="home" 
                            sx={{ 
                                ml: {
                                    xs: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 7,
                                    xl: 7
                                },
                                color: 'primary.main'
                            }}
                        >
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