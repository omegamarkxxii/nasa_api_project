import { useState } from "react";
import { FormControl, InputLabel, OutlinedInput, IconButton, Alert } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { regexDate, regexSol } from "../util";

const SearchBar = ({searchDispatch}) => {
    // const [inputValue, setInputValue] = useState('');
    const handleClick = () => {
        // const validDate = regexDate(inputValue);
        // const validSol = regexSol(inputValue);
        // if(!validDate && !validSol) return;
        // searchDispatch({type: 'SET_VALUE', payload: inputValue});
    }

    const handleChange = (e) => {
        // setInputValue(e.target.value);
        searchDispatch({type: 'SET_VALUE', payload: e.target.value});
    }

    return ( 
        <div style={{backgroundColor: 'pink'}}>
            <FormControl
                sx={{ 
                    m: 0.6,
                    ml: 2.5,
                    mt: 1,
                    width:  "25.4ch"
                }} 
                variant="outlined"
             >
                <InputLabel size="small" htmlFor="image for nasa api"> search </InputLabel>
                <OutlinedInput 
                    id="nasa_search_bar"
                    type="text"
                    label="Search"
                    onChange={handleChange}
                    required
                    endAdornment={
                        <IconButton
                            aria-label="search enter key"
                            onClick={handleClick}
                            edge="end"
                            sx={{p: 1.2}}
                        >
                            <SearchIcon color="primary" size="small" />
                        </IconButton>
                    }
                    sx={{ height: "4.8ch" }}
                />
            </FormControl>
            <span style={{padding: 8, color: 'green', fontSize: 12}}>
                example: &nbsp; 2021-12-31 or digit representing martian year from 1 to max sol
            </span>
                {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
        </div>
    );
}
 
export default SearchBar;