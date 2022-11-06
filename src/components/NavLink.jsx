import pathLabels from '../Constants/pathLabels';
import {Link as RouterLink} from 'react-router-dom';
import { Paper, Box, List, ListItem, ListItemButton, ListItemText, Slide, Typography } from '@mui/material';

const NavLink = ({openMenu}) => {

    return (
    
        <Box 
            sx={{ 
                position: 'fixed', 
                top: {
                    xs: 56,
                    sm: 64,
                    md: 64,
                    lg: 90,
                    xl: 90
                }, 
                left: {
                    xs: 0,
                    sm: 0,
                    md: 0,
                    lg: 67,
                    xl: 67
                }, 
                zIndex: 1200 
            }}
        >
            <Slide direction="right" in={openMenu} mountOnEnter unmountOnExit >
                <Paper  
                    variant="outlined"
                    sx={{ 
                        width: {
                            xs: 110,
                            sm: 110,
                            md: 140,
                            lg: 170,
                            xl: 170
                        }, 
                        p: 2,
                        backgroundColor: 'grey.50' 
                    }} 
                >
                        <Box 
                            sx={{ 
                                width: '100%', 
                                maxWidth: {
                                    xs: 100,
                                    sm: 100,
                                    md: 140,
                                    lg: 160,
                                    xl: 160
                                },
                                bgcolor: 'background.paper',
                            }}
                        >
                            <nav aria-label="link tags">
                                <List disablePadding>
                                    {pathLabels.map((label, idx) => {
                                        return (
                                            <ListItem divider disablePadding key={idx} >
                                                <ListItemButton component={RouterLink} to={label.path} style={{width: '100%'}}>
                                                    <ListItemText
                                                        disableTypography 
                                                        primary={
                                                            <Typography variant='button' align="right" 
                                                                sx={{
                                                                    fontSize: {
                                                                        xs: 11,
                                                                        sm: 11,
                                                                        md: 13,
                                                                        lg: 13,
                                                                        xl: 13
                                                                    }
                                                                }}
                                                            >
                                                                {label.id}
                                                            </Typography>
                                                        } 
                                                        sx={{ pl: 0, color: 'grey.800'}} 
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        );
                                    })}
                                </List>  
                            </nav>
                        </Box>    
                </Paper>
            </Slide>
        </Box>
    );
}
 
export default NavLink;