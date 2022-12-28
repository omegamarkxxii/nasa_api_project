import { useContext } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import FormSetValueContext from '../../context/FormContext/FormSetValueContext';
import style from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomSelect = ({select, value, name}) => {
    const setFormValue = useContext(FormSetValueContext);

    const handleChange = (e) => {
        setFormValue(e.target.name, e.target.value);
    }

    return ( 
        <Box sx={{ minWidth: select.width || 120, ...style.root}}>
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