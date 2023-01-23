import { useContext } from 'react';
import { Stack, Box, Button } from "@mui/material";
import CustomSelect from "../CustomSelect/CustomSelect";
import searchLabel from "../../Constants/searchLabel";
import TextFieldSelect from "../TextFieldSelect/TextFieldSelect";
import FormStateContext from '../../context/FormContext/FormStateContext';
import HandleFormSubmitContext from '../../context/FormContext/HandleFormSubmitContext';
import style from './style';

const label = searchLabel();
const TARGET_DEFAULT_WIDTH = 120;
const YEAR_DEFAULT_WIDTH = '40%';
const MONTH_DEFAULT_WIDTH = '30%';
const DAY_DEFAULT_WIDTH = '30%';

const Form = () => {
    const formState = useContext(FormStateContext);
    const handleFormSubmit = useContext(HandleFormSubmitContext);


    return ( 
        <form onSubmit={handleFormSubmit} role="form">
            <Stack>

                {/* target select field */}
                <Box>
                    <Box sx={style.targetBox}>
                        <CustomSelect 
                            select={{
                                title: "target",
                                InputLabel: "target-select-label",
                                id: "target-select",
                                labelID: "target-select-label",
                                label: "target",
                                list: ['astronomypicoftheday','spirit','opportunity', 'curiosity'],
                                width: TARGET_DEFAULT_WIDTH
                            }}
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
                                width = { YEAR_DEFAULT_WIDTH }
                                name={"year"}
                            />
                        }
                        {formState.id === "spirit" &&  
                            <TextFieldSelect 
                                list={[...label['spirit'].years]}
                                width = { YEAR_DEFAULT_WIDTH }
                                name={"year"}
                            />
                        }
                        {formState.id === "opportunity" &&  
                            <TextFieldSelect 
                                list={[...label['opportunity'].years]}
                                width = { YEAR_DEFAULT_WIDTH } 
                                name={"year"}
                            />
                        }
                        {formState.id === "curiosity" &&  
                            <TextFieldSelect 
                                list={[...label['curiosity'].years]}
                                width = { YEAR_DEFAULT_WIDTH }
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
                                width: MONTH_DEFAULT_WIDTH
                            }}
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
                                width: DAY_DEFAULT_WIDTH
                            }}
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