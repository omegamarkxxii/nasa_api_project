import { FormControl, InputLabel, OutlinedInput, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return ( 
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <FormControl sx={{ m: 0.6, width: '40ch' }} variant="outlined">
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
                            <SearchIcon color="primary" size="small" />
                        </IconButton>
                    }
                    sx={{ height: "5ch" }}
                />
            </FormControl>
            <Typography variant="caption" sx={{color: "grey.700", fontSize: 11, ml: 1}}> 
                example: 16-2-2021, must be separated by hypen "-" 
            </Typography>
        </div>
    );
}
 
export default SearchBar;