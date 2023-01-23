import { useState, useContext } from "react";
import { Box, CssBaseline, Toolbar,  Drawer, Paper, Typography } from "@mui/material";
import Form from '../Form/Form';
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import FormStateContext from "../../context/FormContext/FormStateContext";
import style from './style';

const DesktopDrawer = ({dispatch}) => {
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
        <>
            <Box sx={style.base} data-testid="desktop-drawer">
                <CssBaseline />
                <Drawer sx={style.drawer} variant="permanent" anchor="left" hideBackdrop >
                    <Toolbar />
                    <Box component="main" sx={style.capBox}>
                        <Paper square variant="outlined" sx={style.capPaper}>
                            <Form />
                            <Typography variant="subtitle2" sx={style.capText} data-testid="resource-caption">
                                Resources from <span style={style.capSpan}>NASA OPEN API</span>
                            </Typography>
                        </Paper>
                    </Box>
                </Drawer>


                <Box component="main" sx={style.imgBox} > 
                    <Toolbar />
                    {/* <Alert severity="error">{searchState.errorMsg}</Alert> */}
                    <ImageGallery items={formState.search_result} handleOpen={handleOpen} dispatch={dispatch} />
                </Box>
            </Box>

            {open && <ImageModal handleClose={handleClose} imgUrl={url} imgAlt={title} />}
        </>
    );
}
 
export default DesktopDrawer;