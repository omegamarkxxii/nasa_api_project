import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import { pink } from '@mui/material/colors';


const DeleteFavoriteIcon = ({item, dispatch}) => {
    return ( 
        <IconButton  aria-label={`info about ${item.title}`} onClick={() => dispatch({type: "DELETE_IMAGE", payload: item})}>
            <FavoriteIcon sx={{color: pink[500]}} />
        </IconButton>
    );
}
 
export default DeleteFavoriteIcon;