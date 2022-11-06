import { useState } from 'react';
import {Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import ImageModal from './ImageModal';


const ImageCard = ({maxWidth, imgHeight, imgUrl, content}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Card
                sx={{ 
                    maxWidth: {maxWidth}
                }}
            >
                <CardActionArea
                    onClick={handleOpen}
                >
                    <CardMedia 
                        component='img'
                        height={imgHeight}
                        image={imgUrl}
                        alt='nasa planet take'
                    />

                    {content.display && 
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {content.title}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {content.detail}
                            </Typography>
                        </CardContent>
                    }
                </CardActionArea>
            </Card>

           {open && <ImageModal handleClose={handleClose} imgUrl={imgUrl} imgAlt={content.title || ''} />}
        </div> 
    );
}
 
export default ImageCard;