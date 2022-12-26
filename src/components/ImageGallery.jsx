import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { filterImageURL } from "../util";
import FavoriteIconBtn from './FavoriteIconBtn';

const ImageGallery = ({items, handleOpen, dispatch}) => {

    return ( 
        <ImageList sx={{ width: '100%' }} gap={6}>
            {filterImageURL([...items]).map((item, idx) => {
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
                            title={
                                <Typography variant="h6" sx={{fontSize: 14}} color="grey.800">
                                    {item.name}
                                </Typography>
                            }
                            subtitle={
                                <Typography variant="caption" component="span" sx={{ fontStyle: 'italic'}} color="text.secondary" >
                                    {item.title}
                                </Typography>
                            }
                            position="below"
                            actionIcon={ <FavoriteIconBtn item={item} dispatch={dispatch} /> }
                        />
                    </ImageListItem>
                )
            })}

        </ImageList>
    );
}
 
export default ImageGallery;