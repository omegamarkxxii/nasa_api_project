import { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const TextFieldSelect = ({list, handleYear, width}) => {
    const [value, setValue] = useState(list[0]);
    const handleChange = (e) => {
        setValue(() => {
            handleYear(e.target.value);
            return e.target.value;
        });
    }

    return ( 
        <Box sx={{ minWidth: width || 120, p: 0.5}}>
            <FormControl fullWidth >
                <InputLabel id={'year-select-label'}>year</InputLabel>
                <Select
                    variant='outlined'
                    labelId="year-select-label"
                    id="year-select"
                    value={value}
                    label="year"
                    onChange={handleChange}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                                Width: width,
                            },
                        }
                    }}
                    sx={{height: 40}}

                >
                    {list?.map((item, idx) => {
                        return (
                            <MenuItem key={idx} value={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
 
export default TextFieldSelect;