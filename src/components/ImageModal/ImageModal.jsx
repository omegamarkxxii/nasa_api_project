import {Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import style from './style';

const ImageModal = ({handleClose, imgUrl, imgAlt}) => {

    return ( 
        <Box sx={style.base} data-testid="image-modal" >

            <IconButton aria-label="close" onClick={handleClose} sx={style.clsBtn}  size='large'>
                <CloseIcon />
            </IconButton>

            <Box sx={style.box}>
                <img src={imgUrl} alt={imgAlt} style={style.img} />
            </Box>
        </Box>
    );
}
 
export default ImageModal;