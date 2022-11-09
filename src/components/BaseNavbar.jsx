import {Link as RouterLink} from 'react-router-dom';
import { Breadcrumbs, AppBar,Box,Toolbar,IconButton } from '@mui/material';
import LinkTag from './LinkTag';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';

const BaseNavBar = ({ handleOpenMenu,matches }) => {
    return ( 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="fixed" 
                sx={{
                    color: 'primary.main', 
                    backgroundColor: 'grey.50', 
                    boxShadow: 'none', 
                    borderBottom: '1px solid #e3e3e3',
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
                                    md: 9,
                                    lg: 9,
                                    xl: 9
                                },
                                color: 'primary.main'
                            }}
                        >
                            <RocketLaunchIcon />
                        </IconButton>
                    </Box>

                    {/* extra components based on page */}
                    {/* home / mars-phote / apod --> link tags */}
                    {!matches && 
                        <Box
                            role="presentation"
                            sx={{
                                mr: {
                                    xs: 3,
                                    sm: 3,
                                    md: 3,
                                    lg: 10,
                                    xl: 3
                                } 
                            }}
                        >
                            <Breadcrumbs aria-label="page link tags">
                                <LinkTag componentType={RouterLink} path="/">
                                    <HomeIcon color="primary" sx={{ mr: 0.8}} fontSize="small" />
                                    Home
                                </LinkTag>

                                <LinkTag componentType={RouterLink} path="/"> MARS-PHOTO </LinkTag>

                                <LinkTag componentType={RouterLink} path="/apod">
                                    <CollectionsIcon color="secondary" sx={{ mr: 0.8}} fontSize="small" /> 
                                    APOD 
                                </LinkTag>
                            </Breadcrumbs>
                        </Box>
                    }

                    {/* hamburger menu */}
                    <Box sx={{
                            mr: {
                                xs: 3,
                                sm: 3,
                                md: 10,
                                lg: 10,
                                xl: 10
                            }, 
                            display: {
                                xs: 'block',
                                sm: 'block',
                                md: 'block',
                                lg: 'none',
                                xl: 'none'
                            }, 
                        }}
                    >
                        <IconButton 
                            edge="start" 
                            aria-label="menu" 
                            sx={{ color: 'grey.800' }}
                            onClick={ handleOpenMenu }
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default BaseNavBar;