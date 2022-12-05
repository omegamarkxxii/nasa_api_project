import {Link as RouterLink} from 'react-router-dom';
// import MobileBreadCrumb from './MobileBreadCrumb';
import MobileSelectField from './MobileSelectField';
// import MobileSearchBar from './MobileSearchBar';
import {AppBar, Box, Toolbar, IconButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const MobileDrawer = () => {

    return ( 
        <Box sx={{flexGrow: 1}}>
            <AppBar
                  position="fixed" 
                  sx={{
                      color: 'primary.main', 
                      backgroundColor: 'grey.50', 
                      boxShadow: 'none', 
                      borderBottom: '1px solid #e3e3e3',
                      // height: 60
                  }}
            >
                <Toolbar>
                    <Box sx={{flexGrow: 1, backgroundColor: 'gray'}}>
                        <IconButton component={RouterLink} to={'/'} edge="start" aria-label="home" 
                            sx={{ml: 3, color: 'success.main'}}
                        >
                            <HomeIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    <Box sx={{flexGrow: 1, backgroundColor: 'pink'}}><MobileSelectField /></Box>
                    <Box sx={{flexGrow: 1, backgroundColor: 'coral'}}>rules button</Box>
                    <Box sx={{flexGrow: 1, backgroundColor: 'lightgreen'}}>search button</Box>

                    {/* <MobileSelectField />
                    <MobileSearchBar /> */}

                </Toolbar>
            </AppBar>
        </Box>
    );
}
 
export default MobileDrawer;