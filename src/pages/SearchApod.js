import { BaseNavBar, ApodBread  } from '../components';
import { Box } from "@mui/material";

const SearchApod = ({handleOpenMenu}) => {


    return (
        <Box 
            sx={{
                backgroundColor:'grey.200',
                width: '100%',
                height: 600,
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
            <BaseNavBar handleOpenMenu={handleOpenMenu}>
                {<ApodBread/>}
            </BaseNavBar>
            
           

            <h1>some content</h1>
            <h1>some content</h1>
            <h1>some content</h1>
            <h1>some content</h1>

            
            

        
        </Box>
    );
}
 
export default SearchApod;

/*
 <Box
 sx={{
     position: 'fixed',
     top: 90,
     right: 66,
     display: {
         xs: 'none',
         sm: 'none',
         md: 'none',
         lg: 'block',
         xl: 'block'
     }
 }}
>
 <Paper
     variant='outlined'
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
             width: "100%", 
             maxWidth: {
                 xs: 100,
                 sm: 100,
                 md: 140,
                 lg: 160,
                 xl: 160
             }, 
             bgcolor: 'background.paper' 
             }} 
     >
         <nav aria-label="apod pages link">
             <List>
                 <RouterLink to="/apod" style={{textDecoration: 'none'}}>
                     <ListItem divider disablePadding >
                         <ListItemButton alignItems="center">
                             <ListItemIcon>
                                 <CollectionsIcon color='success' />
                             </ListItemIcon>
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
                                     Gallery
                                 </Typography>
                             }
                             sx={{ pl: 0, color: 'grey.800'}}  
                         />
                         </ListItemButton>
                     </ListItem>
                 </RouterLink>

                 <RouterLink to="/search" style={{textDecoration: 'none'}}>
                     <ListItem divider disablePadding>
                         <ListItemButton>
                             <ListItemIcon>
                                 <SearchIcon color='primary' />
                             </ListItemIcon>
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
                                     Search
                                 </Typography>
                             }
                             sx={{ pl: 0, color: 'grey.800'}}  
                         />
                         </ListItemButton>
                     </ListItem>
                 </RouterLink>
             </List>
         </nav>
     </Box>
 </Paper>
</Box>

*/