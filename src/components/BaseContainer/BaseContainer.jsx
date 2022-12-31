import { CssBaseline, Container } from "@mui/material";
import style from './style';

const BaseContainer = ({ children }) => {
    return ( 
        <>
            <CssBaseline />
            <Container maxWidth="lg" disableGutters sx={style.container}>
                {children}
            </Container>
        </>
    );
}
 
export default BaseContainer;