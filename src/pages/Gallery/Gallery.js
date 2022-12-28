import { useState } from 'react';
import { ImageModal, BaseNavBar, DeleteFavoriteIcon } from '../../components';
import { Grid, Box,ImageList , ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { filterImageURL } from '../../util';
import style from './style';


const Gallery = ({ list, dispatch }) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const handleOpen = (item) => {
        setOpen(prevState => {
            setUrl(item.url);
            setTitle(item.title);
            return !prevState;
        });
    }
  

    const formatTitle = (name, title) => {
        let isAstronomyPicOfTheDay = name === "astronomypicoftheday";
        if(isAstronomyPicOfTheDay) return `${title}`;
        return `${name}  ${title}`;
    }

    return (
       <Box sx={style.root}>

            {/* base top nav */}
            <BaseNavBar />
            
            {/* gallery content */}
            <Box sx={style.box}>
                <Grid container direction="row">
                    <Grid item xs={0} sm={0} md={0} lg={1} xl={1} ></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} xl={10} sx={style.grd} >
                       <ImageList sx={style.imgList}>
                            {<h1>loading....</h1> && filterImageURL([...list]).map((item, idx) => {
                                return (
                                    <ImageListItem key={idx}>
                                        <img 
                                            src={`${item.url}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                            onClick={() => handleOpen(item)}
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                        />
                                        <ImageListItemBar
                                            sx={style.imgBar} 
                                            title={
                                                <Typography variant="subtitle1" sx={style.imgTit}>
                                                    {formatTitle(item.name, item.title)}
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
                    </Grid>
                    <Grid item xs={0} sm={0} md={0} lg={1} xl={1} ></Grid>
                </Grid>
            </Box>

            {open && <ImageModal handleClose={handleClose} imgUrl={url} imgAlt={title} />}

       </Box>
    );
}
 
export default Gallery;