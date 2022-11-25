import { Box, Stack, Typography, TextField } from "@mui/material";

const SearchByDate = () => {
    return ( 
        <Box>
            <Stack>
                <Box
                    component="div"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="date_input" label="date" variant="outlined" size="small" fullWidth />
                </Box>

                <Typography variant="caption" sx={{fontStyle: "italic", color: "grey.900", fontSize: 11, mt: 1}}> 
                    1. example: 16-2-2021
                </Typography>
                <Typography variant="caption" sx={{fontStyle: "italic", color: "grey.900", fontSize: 11, mt: 1}}> 
                    2. format: day-month-year
                </Typography>
                <Typography variant="caption" sx={{fontStyle: "italic", color: "grey.900", fontSize: 11, mt: 1}}> 
                    3. must be seperated by hypen -
                </Typography>
                <Typography variant="caption" sx={{fontStyle: "italic", color: "grey.900", fontSize: 11, mt: 1}}> 
                    4. check more rules on right side of screen
                </Typography>
            </Stack>
        </Box>
    );
}
 
export default SearchByDate;
