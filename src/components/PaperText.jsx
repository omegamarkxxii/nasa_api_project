import { Paper, Typography } from "@mui/material";

const PaperText = ({text}) => {
    return ( 
        <Paper
            variant="outlined"
            sx={{
                p: 2,
                mb: 8,
                ml:{
                    xs: 4,
                    sm: 4,
                    md: 0,
                    lg: 0,
                    xl: 0
                } 
            }}
        >
            <Typography variant="subtitle2"sx={{color: 'grey.800',fontSize: 14}}> {text} </Typography>
        </Paper>
    );
}
 
export default PaperText;