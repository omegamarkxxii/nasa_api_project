import { Link as RouterLink } from 'react-router-dom';
import LinkTag from "../LinkTag/LinkTag";
import { Breadcrumbs, Box } from "@mui/material";
import CollectionsIcon from '@mui/icons-material/Collections';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import style from './style';

const BreadCrumbDesktop = () => {
    return ( 
        <Box role="presentation" sx={style.base}>
            <Breadcrumbs aria-label="page link tags">
                <LinkTag componentType={RouterLink} path="/rovers">
                    <InfoIcon color="primary" sx={style.icon} fontSize="small" />
                    Rovers 
                </LinkTag>
                <LinkTag componentType={RouterLink} path="/apod">
                    <CollectionsIcon color="primary" sx={style.icon} fontSize="small" /> 
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