import { useState } from "react";
import ImageModal from "./ImageModal";
import SelectField from "./SelectField";
import InputField from "./InputField";
import Rules from "./Rules";
import ImageGallery from "./ImageGallery";
import { Box, CssBaseline, Toolbar,  Drawer, Stack, Button, Alert } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const DesktopDrawer2 = () => {
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
        <>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    zIndex: 1000,
                    backgroundColor: 'lightblue',
                    width:{
                        xs: 0,
                        sm: 0,
                        md: 300,
                        lg: 400,
                        xl: 400
                    },
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width:{
                            xs: 0,
                            sm: 0,
                            md: 300,
                            lg: 400,
                            xl: 400
                        },
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />

                <form >
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        sx={{mt: 2, mb: 4}}
                    >
                        <SelectField 
                         
                        />
                        <InputField  />
                        <Button 
                            variant="contained" 
                            color="success" 
                            type="submit" 
                            endIcon={<SearchIcon />}
                            sx={{width: '26ch'}}
                            size="large"
                        >
                            Search
                        </Button>
                        <span style={{borderBottom: "1px solid #e3e3e3", width: "25ch"}}></span>
                        <Rules />
                    </Stack>
                </form>
            
            </Drawer>

            <Box
                component="main"
                sx={{ 
                    flexGrow: 1, 
                    bgcolor: 'background.default', 
                    p: 0.5,
                    backgroundColor: 'white', 
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
 
export default DesktopDrawer2;