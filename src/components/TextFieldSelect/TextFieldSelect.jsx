import { useContext } from "react";
import { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import FormSetValueContext from "../../context/FormContext/FormSetValueContext";
import style from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const TextFieldSelect = ({list, width, name}) => {
    const setFormValue = useContext(FormSetValueContext);
    const [value, setValue] = useState(list[0]);
    const handleChange = (e) => {
        setValue(() => {
            setFormValue(e.target.name, e.target.value);
            return e.target.value;
        });
    }

    return ( 
        <Box sx={{ minWidth: width || 120, ...style.txtField}}>
            <FormControl fullWidth >
                <InputLabel id={'year-select-label'}>year</InputLabel>
                <Select
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