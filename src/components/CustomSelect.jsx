import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomSelect = ({select, value, setValue}) => {

    return ( 
        <Box sx={{ minWidth: select.width || 120, p: 0.5}}>
            <FormControl fullWidth >
                <InputLabel id={select.inputLabel}>{select.title}</InputLabel>
                <Select
                    variant='outlined'
                    labelId={select.labelID}
                    id={select.id}
                    value={value}
                    label={select.label}
                    onChange={setValue}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                                Width: select.width,
                            },
                        }
                    }}
                    sx={{height: 40}}

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