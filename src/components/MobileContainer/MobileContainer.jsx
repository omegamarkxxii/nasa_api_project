import {Link as RouterLink} from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Container, Slide, IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import style from './style';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  

const MobileContainer = ({ children }) => {

    return ( 
        <Box>
            <CssBaseline />
            <HideOnScroll>
                <AppBar sx={style.root}>
                    <Toolbar>
                        <Box>
                            <IconButton 
                                component={RouterLink} 
                                to={'/'} 
                                edge="start" 
                                aria-label="home" 
                            >
                                <RocketLaunchIcon fontSize="small" color="primary" />
                            </IconButton>
                        </Box>
                        {children[0] ?? children ?? "no children 1"}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container component={"main"} sx={{mt: 2.5}}>
                {children[1] ?? 'no children 2'}
            </Container>
        </Box>
    );
}
 
export default MobileContainer;