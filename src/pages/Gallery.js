import { useState } from 'react';
import { ImageModal, BaseNavBar, DeleteFavoriteIcon } from '../components';
import { Grid, Box,ImageList , ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { filterImageURL } from '../util';


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
  
    return (
       <Box
            sx={{
                backgroundColor: 'grey.50',
                width: '100%',
                mt: {
                    xs: 7,
                    sm: 8,
                    md: 8,
                    lg: 8,
                    xl: 8
                },
            }}
        >

            {/* base top nav */}
            <BaseNavBar />
            
            {/* gallery content */}
            <Box sx={{flexGrow: 1}}>
                <Grid container direction="row">
                    <Grid item xs={0} sm={0} md={0} lg={1} xl={1} ></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} xl={10}
                        sx={{
                            border: "1px solid #e3e3e3",
                            paddingLeft: 1,
                            paddingRight: 1,
                        }}
                    >
                       <ImageList sx={{ width: '100%' }}>
                            <ImageListItem key="Subheader" cols={2}>
                                <ListSubheader 
                                    sx={{textDecoration: 'underline'}} 
                                    component="div"
                                >
                                    Astronomy Picture Of The Day
                                </ListSubheader>
                            </ImageListItem>
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
                                            sx={{backgroundColor: 'grey.900', color: 'grey.50'}} 
                                            title={item.title}
                                            position="below"
                                            actionIcon={ <DeleteFavoriteIcon item={item} dispatch={dispatch} /> }
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