import RadioButton from "./RadioButton";
import SearchByDate from "./SearchByDate";
import DateInput from "./DateInput";
import { Paper, Typography, Divider, Box, Button, Stack, TextField } from "@mui/material";


const FixedForm = () => {
    return ( 
        <Paper
            sx={{
                width: {
                    xs: 100,
                    sm: 100,
                    md: 250,
                    lg: 270,
                    xl: 270
                },
                position: "fixed",
                top: {
                    xs: 65,
                    sm: 65,
                    md: 65,
                    lg: 65, 
                    xl: 65
                },
                left: {
                    xs: 0,
                    sm: 0,
                    md: 3,
                    lg: 68, 
                    xl: 68
                },
                padding: 2,
                backgroundColor: 'white'
            }}
        >
            <form>
                <RadioButton />

                <Divider sx={{mb: 2, mt: 1}} />

                <SearchByDate />

                <Divider sx={{mb: 2, mt: 2}} />

                <Box sx={{mb: 1}}>
                    <Button variant="contained" color="success" size="medium" fullWidth> Search </Button>
                </Box>
            </form>
        </Paper>
    );
}
 
export default FixedForm;