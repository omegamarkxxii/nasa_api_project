import {Link as RouterLink} from 'react-router-dom';
import LinkTag from "../LinkTag/LinkTag";
import { Breadcrumbs, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchIcon from '@mui/icons-material/Search';
import style from './style';

const BreadCrumbDesktop = () => {
    return ( 
        <Box role="presentation" sx={style.root}>
            <Breadcrumbs aria-label="page link tags">
                <LinkTag componentType={RouterLink} path="/" fontSize="small">
                    <HomeIcon color="success" sx={style.icon} fontSize="small" /> 
                    Home
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/rovers">
                    Rovers 
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/apod">
                    <CollectionsIcon color="secondary" sx={style.icon} fontSize="small" /> 
                    Gallery 
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/search">
                    <SearchIcon color="primary" sx={style.icon} fontSize="small" /> 
                    Search 
                </LinkTag>
            </Breadcrumbs>
        </Box>
    );
}
 
export default BreadCrumbDesktop;