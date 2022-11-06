import {Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ImageModal = ({handleClose, imgUrl, imgAlt}) => {

    return ( 
        <Box 
            sx={{ 
                position: 'fixed',
                top: '0',
                left: '0',
                bgcolor: 'grey.900',
                opacity: 1,
                p: 0,
                zIndex: 1200,
                overflowY: 'hidden' 
            }}
        >

            <IconButton 
                aria-label="close" 
                onClick={handleClose} 
                sx={{color: '#fff', position: 'absolute', top: 20, left: 20}} 
                size='large' 
            >
                <CloseIcon />
            </IconButton>

            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img 
                    src={imgUrl}
                    alt={imgAlt}
                    style={{
                        width: '100%',
                        height: '90%',
                        objectFit: 'contain'
                    }}
                ></img>
            </div>
        </Box>
    );
}
 
export default ImageModal;