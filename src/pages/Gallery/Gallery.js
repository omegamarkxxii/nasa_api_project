import { useState } from 'react';
import { ImageModal, DeleteFavoriteIcon, BaseContainer, DesktopNavBar, MobileNavBar } from '../../components';
import { Box,ImageList , ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { filterImageURL, trimStr } from '../../util/util';
import style from './style';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Gallery = ({ list, dispatch }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpen = (item) => {
        setOpen(prevState => {
            setUrl(item.url);
            setTitle(item.title);
            return !prevState;
        });
    }
  
    return (
        <BaseContainer>
            {matches ? <MobileNavBar /> : <DesktopNavBar />}

            <Box component={"main"} sx={style.base} data-testid="gallery-page">
                <ImageList>
                    {filterImageURL([...list]).map((item, idx) => {
                        return (
                            <ImageListItem key={idx}>
                                <img 
                                    src={`${item.url}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => handleOpen(item)}
                                    style={style.img}
                                />
                                <ImageListItemBar
                                    sx={style.imgBar} 
                                    title={
                                        <Typography variant="subtitle2" sx={style.imgTit}>
                                            { matches ? trimStr(item.title, 19) : item.title }
                                        </Typography>
                                    }
                                    position="below"
                                    actionIcon={ <DeleteFavoriteIcon item={item} dispatch={dispatch} /> }
                                    subtitle={
                                        <Typography variant="caption" sx={style.imgSub}>
                                            {item.date}
                                        </Typography>
                                    }

                                />
                            </ImageListItem>
                            )
                        })}
                </ImageList>
            </Box>

            {open && <ImageModal handleClose={handleClose} imgUrl={url} imgAlt={title} />}
        </BaseContainer>
    );
}
 
export default Gallery;