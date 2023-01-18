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
            dispatch({type: 'DELETE_IMAGE', payload: item});
        }
        setLikeBtn(!likeBtn);
    }

    return ( 
        <IconButton  aria-label={`favorite button icon`} onClick={handleClick}>
            {likeBtn ? <FavoriteIcon sx={style.icon} /> : <FavoriteBorderIcon sx={style.icon} />}
        </IconButton>
    );
}
 
export default FavoriteIconBtn;