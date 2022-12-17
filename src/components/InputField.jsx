import { useState } from 'react';
import { Box, TextField } from "@mui/material";

const InputField = () => {
    const [target, setTarget] = useState('');
    const handleChange = (e) => {
        setTarget(e.target.value);
    }
  

    return ( 
        <Box
            component="div"
            sx={{
            '& > :not(style)': { m: 0, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                    size="small" 
                    id="outlined-basic" 
                    label="enter date or sol" 
                    variant="outlined"
                    value={target}
                    helperText="example: 2021-12-31 or digit representing martian year from 1 to max sol"
                    onChange={handleChange}
            ></TextField>
        </Box>
    );
}
 
export default InputField;