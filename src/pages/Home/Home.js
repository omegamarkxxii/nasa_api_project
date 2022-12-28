import { Container, Box, Grid } from '@mui/material';
import { ImageCard, BaseNavBar } from '../../components';
import { setURL } from '../../util';
import nasaimg from '../../images/nasa_1.jpg';
import style from './style';

const defaultTitle = 'Astronomy Picture Of The Day';
const defaultDate = '';

const Home = ({apod}) => {

    return ( 
        <Container maxWidth="lg" disableGutters sx={style.root} >

            {/* base top nav */}
            <BaseNavBar />

             <Box sx={style.box}>
                <Grid container spacing={2}>
                    <Grid item xs={0} sm={0} md={0} lg={1} xl={1} ></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10} xl={10} >
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
                    <Grid item xs={0} sm={0} md={0} lg={1} xl={1} ></Grid>
                </Grid>
            </Box>
        </Container>
    );
}
 
export default Home;