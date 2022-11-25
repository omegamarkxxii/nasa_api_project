import { useState } from 'react';
import { Box, TextField, MenuItem } from "@mui/material";

const years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014
    ,2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022
];

const DateInput = () => {
    const [year, setYear] = useState(2000);

    const handleChange = (e) => {
        setYear(e.target.value)
    }

    return ( 
        <Box
            component="div"
            sx={{
            '& .MuiTextField-root': { m: 1, width: 120 },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="select year"
                select
                label="year"
                value={year}
                onChange={handleChange}
                size="small"
            >
                {years.map((year, idx) => {
                    return (<MenuItem key={idx} value={year}> {year} </MenuItem>);
                })}
            </TextField>
        </Box>
    );
}
 
export default DateInput;