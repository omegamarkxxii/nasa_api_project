import { useState } from 'react';
import {Box, TextField, MenuItem} from '@mui/material';

const MobileSelectField = () => {
    const [target, setTarget] = useState("apod");
    const handleChange = (e) => {
        setTarget(e.target.value);
    };

    return ( 
        <Box sx={{flexGrow: 0}}>
            <Box
                component="div"
                sx={{
                    '& .MuiTextField-root': { mr: 0, width: '25ch'}
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        size="small"
                        id="select-search-target-for-nasa-api"
                        select
                        value={target}
                        onChange={handleChange}
                        
                    >
                        <MenuItem value="apod"> Astronomy picture of the day </MenuItem>
                        <MenuItem value="spirit"> Spirit rover </MenuItem>
                        <MenuItem value="curiosity"> Curiosity rover </MenuItem>
                        <MenuItem value="opportunity"> Opportunity rover </MenuItem>
                    </TextField>
                </div>
            </Box>
        </Box>
    );
}
 
export default MobileSelectField;