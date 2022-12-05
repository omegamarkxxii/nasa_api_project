import {Link as RouterLink} from 'react-router-dom';
import LinkTag from './LinkTag';
import {Breadcrumbs, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';

const MobileBreadCrumb = () => {
    return ( 
        <Box
            role="presentation"
            sx={{flexGrow: 0, mr: 2}}
        >
            <Breadcrumbs>
                <IconButton 
                    component={RouterLink} 
                    to={'/'} 
                    edge="start" 
                    aria-label="home"
                >
                    <HomeIcon color="success"  fontSize="small" />
                </IconButton>
                <LinkTag componentType={RouterLink} path="/rovers"> Rovers </LinkTag>
                <LinkTag componentType={RouterLink} path="/apod">
                    <CollectionsIcon color="secondary" sx={{ mr: 0.8}} fontSize="small" /> 
                    Gallery 
                </LinkTag>
            </Breadcrumbs>
        </Box>
    );
}
 
export default MobileBreadCrumb;