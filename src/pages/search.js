import { BaseNavBar, Form} from "../components";
import { Box, Grid, Container, Slide, Paper } from "@mui/material";



const Search = ({handleOpenMenu, matches}) => {
    return ( 
       <>
            <BaseNavBar handleOpenMenu={handleOpenMenu} matches={matches} />

            <Box 
                sx={{
                    mt: {
                        xs: 7,
                        sm: 8,
                        md: 8,
                        lg: 12,
                        xl: 8
                    },
                    backgroundColor: 'white',
                    // border: "1px solid black",
                    p: 0
                }}
            >
                <Form />

            </Box>

            

            {/* <Box 
                sx={{
                    flexGrow: 1,
                    mt:{
                        xs: 7,
                        sm: 8,
                        md: 10,
                        lg: 10,
                        xl: 10
                    } 
                }}
            >
                <Grid container spacing={2} direction="row">
                    <Grid item xs={12} sm={12} md={3} lg={3} xl={3} sx={{backgroundColor: 'lightblue'}} ></Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{backgroundColor: 'lightgreen'}} >
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                        <h1>item</h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={{backgroundColor: 'lightcoral'}} ></Grid>
                </Grid>
            </Box> */}
       </>
    );
}
 
export default Search;