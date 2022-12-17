import {Link as RouterLink} from 'react-router-dom';
import LinkTag from "./LinkTag";
import { Breadcrumbs, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchIcon from '@mui/icons-material/Search';

const BreadCrumbDesktop = () => {
    return ( 
        <Box role="presentation" sx={{ mr: {xs: 3, sm: 3, md: 3, lg: 9, xl: 9 }}}>
            <Breadcrumbs aria-label="page link tags">
                <LinkTag componentType={RouterLink} path="/" sx={{fontSize: 9}}>
                    <HomeIcon color="success" sx={{ mr: 0.8}} fontSize="small" /> 
                    Home
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/rovers">
                    Rovers 
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/apod">
                    <CollectionsIcon color="secondary" sx={{ mr: 0.8}} fontSize="small" /> 
                    Gallery 
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/search">
                    <SearchIcon color="primary" sx={{ mr: 0.8}} fontSize="small" /> 
                    Search 
                </LinkTag>
            </Breadcrumbs>
        </Box>
    );
}
 
export default BreadCrumbDesktop;