import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import style from './style';


const DeleteFavoriteIcon = ({item, dispatch}) => {
    return ( 
        <IconButton  aria-label={`info about ${item.title}`} onClick={() => dispatch({type: "DELETE_IMAGE", payload: item})}>
            <FavoriteIcon sx={style.icon} />
        </IconButton>
    );
}
 
export default DeleteFavoriteIcon;