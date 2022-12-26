import { useState, useContext } from "react";
import { Box, CssBaseline, Toolbar,  Drawer, Paper, Typography } from "@mui/material";
import Form from './Form';
import ImageGallery from "./ImageGallery";
import ImageModal from "./ImageModal";
import FormStateContext from "../context/FormContext/FormStateContext";

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
            <Box sx={{ display: 'flex'}}>
                <CssBaseline />
                <Drawer
                    sx={{
                        zIndex: 1000,
                        backgroundColor: 'white',
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
                    <Box component="main" sx={{flexGrow: 1}}>
                        <Paper square variant="outlined" sx={{m: 2, p: 1}}>
                            <Form />
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    mt: 10,
                                    color: "grey.800",
                                    fontSize: 12,
                                    textAlign: 'center'
                                }}
                            >
                                Resources from <span style={{color: "blue", fontWeight: 'bold'}}>NASA OPEN API</span>
                            </Typography>
                        </Paper>
                    </Box>
                </Drawer>


                <Box
                    component="main"
                    sx={{ 
                        flexGrow: 1, 
                        bgcolor: 'background.default', 
                        p: 0.5,
                    }}
                > 
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