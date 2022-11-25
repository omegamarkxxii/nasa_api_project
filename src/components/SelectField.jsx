import { useState } from 'react';
import { TextField, Box, MenuItem } from '@mui/material';


const SelectField = () => {
    const [target, setTarget] = useState("apod");
    const handleChange = (e) => {
        setTarget(e.target.value);
    };


    return ( 
        <Box
            component="div"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{display: "flex",  justifyContent: "center"}}>
                <TextField
                    size="small"
                    id="select-search-target-for-nasa-api"
                    select
                    label="Choose Target"
                    value={target}
                    onChange={handleChange}
                >
                    <MenuItem value="apod"> astronomy picture of the day </MenuItem>
                    <MenuItem value="mars-rover"> mars-rover </MenuItem>
                </TextField>
            </div>
        </Box>
    );
}

export default SelectField;