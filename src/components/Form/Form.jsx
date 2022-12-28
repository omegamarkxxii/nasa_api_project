import { useContext } from 'react';
import { Stack, Box, Typography, Button } from "@mui/material";
import CustomSelect from "../CustomSelect/CustomSelect";
import searchLabel from "../../Constants/searchLabel";
import TextFieldSelect from "../TextFieldSelect/TextFieldSelect";
import FormStateContext from '../../context/FormContext/FormStateContext';
import HandleFormSubmitContext from '../../context/FormContext/HandleFormSubmitContext';
import style from './style';

const label = searchLabel();

const Form = () => {
    const formState = useContext(FormStateContext);
    const handleFormSubmit = useContext(HandleFormSubmitContext);


    return ( 
        <form onSubmit={handleFormSubmit}>
            <Stack>

                {/* target select field */}
                <Box>
                    <Typography variant="subtitle2">
                        Choose search target
                    </Typography>
                    <Box sx={style.targetBox}>
                        <CustomSelect 
                            select={{
                                title: "target",
                                InputLabel: "target-select-label",
                                id: "target-select",
                                labelID: "target-select-label",
                                label: "target",
                                list: ['astronomypicoftheday','spirit','opportunity', 'curiosity'],
                                width: 120
                            }}
                            value={formState.id}
                            name={"id"}
                        />
                    </Box>
                </Box>

                {/* date select field */}
                <Box sx={style.dateBox}>
                    <Box sx={style.dateInnerBox}>
                        {/* year */}
                        {formState.id === "astronomypicoftheday" &&  
                            <TextFieldSelect 
                                list={[...label['astronomypicoftheday'].years]}
                                width = '40%'
                                name={"year"}
                            />
                        }
                        {formState.id === "spirit" &&  
                            <TextFieldSelect 
                                list={[...label['spirit'].years]}
                                width = '40%'
                                name={"year"}
                            />
                        }
                        {formState.id === "opportunity" &&  
                            <TextFieldSelect 
                                list={[...label['opportunity'].years]}
                                width = '40%'
                                name={"year"}
                            />
                        }
                        {formState.id === "curiosity" &&  
                            <TextFieldSelect 
                                list={[...label['curiosity'].years]}
                                width = '40%'
                                name={"year"}
                            />
                        }

                        {/* month */}
                        <CustomSelect 
                            select={{
                                title: "month",
                                InputLabel: "month-select-label",
                                id: "month-select",
                                labelID: "month-select-label",
                                label: "month",
                                list: [...label["months"]],
                                width: "30%"
                            }}
                            value={formState.month}
                            name={"month"}
                        />

                        {/* day */}
                        <CustomSelect 
                            select={{
                                title: "day",
                                InputLabel: "day-select-label",
                                id: "day-select",
                                labelID: "day-select-label",
                                label: "day",
                                list: [...label["days"]],
                                width: "30%"
                            }}
                            value={formState.day}
                            name={"day"}
                        />
                    </Box>
                </Box>

                {/* search button */}
                <Box textAlign="center" sx={style.searchBox}>
                    <Button type="submit" sx={style.searchBtn} size="medium" variant="outlined" color="primary">
                        Search
                    </Button>
                </Box>

            </Stack>
        </form>
    );
}
 
export default Form;