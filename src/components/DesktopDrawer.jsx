import { useState, useEffect } from "react";
import { Box, CssBaseline, Toolbar,  Drawer, Alert, Paper} from "@mui/material";
import Form from './Form';
import ImageGallery from "./ImageGallery";
import ImageModal from "./ImageModal";

const DesktopDrawer = () => {
    const [images, setImages] = useState([]);
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    
    const handleClose = () => setOpen(false);
    const handleOpen = (item) => {
        setOpen(prevState => {
            setUrl(item.url);
            setTitle(item.title);
            return !prevState;
        });
    }

    useEffect(() => {
        if(images.length <= 0) return;
        console.log(images);
        // console.log(images.photos[0].camera.full_name);
        // console.log(images.photos[0].id);
        // console.log(images.photos[0].img_src);
        // console.log(images.photos[0].rover.name);
    }, [images]);

    return ( 
        <>
            <Box sx={{ display: 'flex'}}>
                <CssBaseline />
                <Drawer
                    sx={{
                        zIndex: 1000,
                        backgroundColor: 'lightblue',
                        width: {
                            xs: 100,
                            sm: 100,
                            md: 300,
                            lg: 350,
                            xl: 350
                        },
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width:  {
                                xs: 100,
                                sm: 100,
                                md: 300,
                                lg: 350,
                                xl: 350
                            },
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                    hideBackdrop
                >
                    <Toolbar />
                    <Box component="main" sx={{flexGrow: 1, backgroundColor: 'gray'}}>
                        <Paper square variant="elevation" sx={{m: 2, p: 1}}>
                            <Form setImages={setImages} />
                        </Paper>
                    </Box>
                </Drawer>


                <Box
                    component="main"
                    sx={{ 
                        flexGrow: 1, 
                        bgcolor: 'background.default', 
                        p: 0.5,
                        backgroundColor: 'lightgreen', 
                    }}
                > 
                    <Toolbar />
                    <ImageGallery items={[]} handleOpen={handleOpen} />
                    {/* <Alert severity="error">{searchState.errorMsg}</Alert> */}
                </Box>
            </Box>

            {open && <ImageModal handleClose={handleClose} imgUrl={url} imgAlt={title} />}
        </>
    );
}
 
export default DesktopDrawer;