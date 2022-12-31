import {Link as RouterLink} from 'react-router-dom';
import LinkTag from "../LinkTag/LinkTag";
import { Breadcrumbs, Box, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchIcon from '@mui/icons-material/Search';
import style from './style';

const BreadCrumbMobile = () => {
    return ( 
        <Box role="presentation" >
            <Breadcrumbs aria-label="page link tags">
                <IconButton component={RouterLink} to={'/'} edge="start" aria-label="home"  sx={style.home}>
                        <HomeIcon color="primary"  fontSize="small" />
                </IconButton>

                <LinkTag componentType={RouterLink} path="/rovers" > Rovers </LinkTag>

                <IconButton component={RouterLink} to={'/apod'} edge="start" aria-label="gallery" sx={style.collection}>
                        <CollectionsIcon color="primary"  fontSize="small" />
                </IconButton>


                <IconButton component={RouterLink} to={'/search'} edge="start" aria-label="search" sx={style.search}>
                        <SearchIcon color="primary"  fontSize="small" />
                </IconButton>
            </Breadcrumbs>
        </Box>
    );
}
 
export default BreadCrumbMobile;