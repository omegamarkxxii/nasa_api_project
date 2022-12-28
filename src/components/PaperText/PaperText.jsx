import { Paper, Typography } from "@mui/material";
import style from './style';

const PaperText = ({text}) => {
    return ( 
        <Paper variant="outlined" sx={style.root} >
            <Typography variant="subtitle2"sx={style.text}> {text} </Typography>
        </Paper>
    );
}
 
export default PaperText;