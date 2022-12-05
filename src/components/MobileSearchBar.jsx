import {Box, FormControl, InputLabel, OutlinedInput, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const MobileSearchBar = () => {
    return ( 
        <Box sx={{flexGrow: 0}}>
            <FormControl
                sx={{  m: 0.6, width:  "80%"}} 
                variant="outlined"
            >
                <InputLabel size="small" htmlFor="image for nasa api"> search </InputLabel>
                <OutlinedInput 
                    id="nasa_search_bar"
                    type="text"
                    label="Search"
                    endAdornment={
                        <IconButton
                            aria-label="search enter key"
                            // onClick={handleClickShowPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                            sx={{p: 1.2}}
                        >
                            <SearchIcon color="primary" fontSize="small" />
                        </IconButton>
                    }
                    sx={{ height: "4.4ch" }}
                />
            </FormControl>
        </Box>
    );
}
 
export default MobileSearchBar;