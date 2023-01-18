import { useState, useContext } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import FormSetValueContext from "../../context/FormContext/FormSetValueContext";
import style from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const DEFAULT_WIDTH = 120;


const TextFieldSelect = ({list, width, name}) => {
    const setFormValue = useContext(FormSetValueContext);
    const [value, setValue] = useState(list[0]);
    const handleChange = (e) => {
        setFormValue(name, e.target.value);
        setValue(e.target.value);
    }



    return ( 
        <Box data-testid="text-field-select" sx={{ minWidth: width || DEFAULT_WIDTH, ...style.txtField}}>
            <FormControl fullWidth >
                <InputLabel role="label" id={'year-select-label'}>year</InputLabel>
                <Select
                    role="select"
                    name={name}
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
                    sx={style.selbar}
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