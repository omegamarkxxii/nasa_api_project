import { Container, Box, Grid } from '@mui/material';
import { ImageCard, BaseNavBar } from '../components';
import nasaimg from '../images/nasa_1.jpg';
import { setURL } from '../util';

const defaultTitle = 'Astronomy Picture Of The Day';
const defaultDate = '';

const Home = ({apod, handleOpenMenu}) => {

    return ( 
        <Container
            maxWidth="lg"
            disableGutters
            sx={{
                mt:{
                    xs: 5,
                    sm: 6,
                    md: 6,
                    lg: 8,
                    xl: 8
                } 
            }}
            
        >

            {/* base top nav */}
            <BaseNavBar handleOpenMenu={handleOpenMenu}></BaseNavBar>

             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={0} sm={0} md={0} lg={2} xl={10} ></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} xl={2} >
                        <ImageCard
                            maxWidth={1536}
                            imgHeight={520} 
                            imgUrl={setURL(apod, 'image', nasaimg)}
                            content={
                                {
                                    display: true,
                                    title: apod?.title ?? defaultTitle,
                                    detail: apod?.date ?? defaultDate
                                }
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
 
export default Home;