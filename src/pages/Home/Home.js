import { Box } from '@mui/material';
import { ImageCard, BaseContainer, DesktopNavBar, MobileNavBar } from '../../components';
import { setURL } from '../../util';
import nasaimg from '../../images/nasa_1.jpg';
import style from './style';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const defaultTitle = 'Astronomy Picture Of The Day';
const defaultDetail = '';
const imgmaxWidth = 1536;
const imgHeight = 520;

const Home = ({apod}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return ( 
        <BaseContainer>
            {matches ? <MobileNavBar /> : <DesktopNavBar />}
        
            <Box component="main" sx={style.imgWrapper} >
                <ImageCard
                    maxWidth={imgmaxWidth}
                    imgHeight={imgHeight}
                    imgUrl={setURL(apod, 'image', nasaimg)}
                    content={{
                        display: true,
                        title: apod?.title ?? defaultTitle,
                        detail: apod?.date ?? defaultDetail
                    }}
                />
            </Box>
        </BaseContainer>
    );
}
 
export default Home;