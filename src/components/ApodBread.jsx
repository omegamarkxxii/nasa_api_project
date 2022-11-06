import {Link as RouterLink} from 'react-router-dom';
import { Breadcrumbs, Link, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CollectionsIcon from '@mui/icons-material/Collections';

const ApodBread = () => {
    return ( 
        <Box 
            role="presentation"
            sx={{
                mr: {
                    xs: 3,
                    sm: 3,
                    md: 3,
                    lg: 10,
                    xl: 10
                } 
            }}
        >
            <Breadcrumbs aria-label="page links">
                <Link
                    underline="hover"
                    component={RouterLink}
                    to={'/search'}
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        color: 'grey.800',
                        fontSize: {
                            xs: 11,
                            sm: 11,
                            md: 13,
                            lg: 13,
                            xl: 13
                        } 
                    }}
                    variant="button"
                >
                    <SearchIcon color="primary" sx={{ mr: 0.8}} fontSize="small" />
                    Search
                </Link>

                <Link
                    underline="hover"
                    component={RouterLink}
                    to={'/apod'}
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        color: 'grey.800',
                        fontSize: {
                            xs: 11,
                            sm: 11,
                            md: 13,
                            lg: 13,
                            xl: 13
                        }  
                    }}
                    variant="button"
                >
                    <CollectionsIcon color="secondary" sx={{ mr: 0.8 }} fontSize="small" />
                    Gallery
                </Link>
            </Breadcrumbs>
        </Box>
    );
}
 
export default ApodBread;