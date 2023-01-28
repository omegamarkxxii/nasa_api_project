import { useState, useContext } from 'react';
import { Box } from '@mui/material';
import MobileSearchBar from '../MobileSearchBar/MobileSearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import FormStateContext from '../../context/FormContext/FormStateContext';

  
const MobileDrawer = ({ dispatch }) => {
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const formState = useContext(FormStateContext);

    const handleClose = () => setOpen(false);
    const handleOpen = (item) => {
        setOpen(prevState => {
            setUrl(item.url);
            setTitle(item.title);
            return !prevState;
        });
    }

    return ( 
        <Box component="main" >
            <MobileSearchBar />

            <Box data-testid="image-box">
                <ImageGallery items={formState.search_result} handleOpen={handleOpen} dispatch={dispatch} />
            </Box>

            {open && <ImageModal handleClose={handleClose} imgUrl={url} imgAlt={title} />}
        </Box>
    );
}
 
export default MobileDrawer;