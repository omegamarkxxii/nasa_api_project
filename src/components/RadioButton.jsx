import { Radio, RadioGroup, FormControlLabel, FormControl, Typography } from "@mui/material";

const RadioButton = () => {
    return ( 
        <FormControl>
            <Typography variant="subtitle1" sx={{color: "grey.900"}}>
                Choose target
            </Typography>

            <RadioGroup
                aria-labelledby="nasa search option radio button group"
                defaultValue="astronomy picture of the day"
                name="nasa-radio-buttons-group"
            >
                <FormControlLabel 
                    disableTypography
                    value="astronomy picture of the day" 
                    control={ <Radio sx={{'& .MuiSvgIcon-root': {fontSize: 15,}}}/> } 
                    label={
                        <Typography variant="subtitle1" sx={{color: "grey.900", fontSize: 14}}>
                            astronomy picture of the day
                        </Typography>
                    } 
                />

                <FormControlLabel 
                    disableTypography
                    value="mars-rover" 
                    control={ <Radio sx={{'& .MuiSvgIcon-root': {fontSize: 15,}}}/> } 
                    label={
                        <Typography variant="subtitle1" sx={{color: "grey.900", fontSize: 14}}>
                            mars-rover
                        </Typography>
                    } 
                />

            </RadioGroup>
        </FormControl>
    );
}
 
export default RadioButton;