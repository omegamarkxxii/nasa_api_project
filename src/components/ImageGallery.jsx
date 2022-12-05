import { ImageList, ImageListItem} from "@mui/material";
// import nasaImg from '../images/nasa_1.jpg';
import { filterImageURL } from "../util";

const ImageGallery = ({items, handleOpen}) => {
    return ( 
        <ImageList sx={{ width: '100%' }}>
            {filterImageURL([...items]).map((item, idx) => {
                return (
                    <ImageListItem key={item.date + idx}>
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
                    </ImageListItem>
                )
            })}

        </ImageList>
    );
}
 
export default ImageGallery;