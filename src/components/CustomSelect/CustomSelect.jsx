import { useState, useContext } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import FormSetValueContext from '../../context/FormContext/FormSetValueContext';
import style from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const DEFAULT_WIDTH = 120;

const CustomSelect = ({select, name}) => {
    const setFormValue = useContext(FormSetValueContext);
    const [value, setValue] = useState(select.list[0]);

    const handleChange = (e) => {
        setFormValue(e.target.name, e.target.value);
        setValue(e.target.value);
    }

    return ( 
        <Box sx={{ minWidth: select.width || DEFAULT_WIDTH, ...style.base}} data-testid="custom-select">
            <FormControl fullWidth >
                <InputLabel id={select.inputLabel}>{select.title}</InputLabel>
                <Select
                    name={name}
                    variant='outlined'
                    labelId={select.labelID}
                    id={select.id}
                    value={value}
                    label={select.label}
                    onChange={handleChange}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                                Width: select.width,
                            },
                        }
                    }}
                    sx={style.selBar}

                >
                    {select?.list?.map((item, idx) => {
                        return (
                            <MenuItem key={idx} value={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
 
export default CustomSelect;