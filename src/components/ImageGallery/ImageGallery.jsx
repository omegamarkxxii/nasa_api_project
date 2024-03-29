import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { filterImageURL } from "../../util/util";
import FavoriteIconBtn from '../FavoriteIconBtn/FavoriteIconBtn';
import { trimStr } from "../../util/util";
import style from './style';

const ImageGallery = ({items, handleOpen, dispatch}) => {

    return ( 
        <ImageList sx={style.base} gap={6} data-testid="image-gallery">
            {filterImageURL([...items]).map((item, idx) => {
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
                            title={
                                <Typography variant="h6" sx={style.imgTit} color="grey.800">
                                    { item.name === "astronomypicoftheday" ?
                                        trimStr(item.title, 19)
                                        :
                                        item.name 
                                    }
                                </Typography>
                            }
                            subtitle={
                                <Typography variant="caption" component="span" sx={style.imgSub} color="text.secondary" >
                                    { item.name === "astronomypicoftheday" ?
                                        item.date
                                        :
                                        trimStr(item.title, 19)
                                    }
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