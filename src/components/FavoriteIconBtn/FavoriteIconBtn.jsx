import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import style from './style';

const FavoriteIconBtn = ({item, dispatch}) => {
    const [likeBtn, setLikeBtn] = useState(false);
    const handleClick = () => {
        if(!likeBtn === true) {
            dispatch({type: 'SAVE_IMAGE', payload: item});
        } else {
            console.log('delete image');
            dispatch({type: 'DELETE_IMAGE', payload: item});
        }
        setLikeBtn(!likeBtn);
    }

    return ( 
        <IconButton  aria-label={`info about ${item.title}`} onClick={handleClick}>
            {likeBtn === true ? <FavoriteIcon sx={style.icon} /> : <FavoriteBorderIcon sx={style.icon} />}
        </IconButton>
    );
}
 
export default FavoriteIconBtn;