import { useContext } from "react";
import { Box, Grid, Button, Typography, Divider } from "@mui/material";
import CustomSelect from "../CustomSelect/CustomSelect";
import TextFieldSelect from "../TextFieldSelect/TextFieldSelect";
import FormStateContext from "../../context/FormContext/FormStateContext";
import HandleFormSubmitContext from "../../context/FormContext/HandleFormSubmitContext";
import searchLabel from "../../Constants/searchLabel";
import style from './style';

const label = searchLabel();
const TARGET_DEFAULT_WIDTH = 120;
const YEAR_DEFAULT_WIDTH = '40%';
const MONTH_DEFAULT_WIDTH = '30%';
const DAY_DEFAULT_WIDTH = '30%';

const MobileSearchBar = () => {
    const formState = useContext(FormStateContext);
    const handleFormSubmit = useContext(HandleFormSubmitContext);

    return ( 
        <form onSubmit={handleFormSubmit} style={style.form}>
            <Grid container spacing={1} >

                <Grid item xs={12} sm={3} >
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
                        value={formState.id}
                        name={"id"}
                    />
                </Grid>

                <Grid item xs={12} sm={5} >
                    <Box sx={style.yearWrapper}>
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
                                width: DAY_DEFAULT_WIDTH
                            }}
                            value={formState.day}
                            name={"day"}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4} >
                    <Box textAlign="center" sx={style.btnWrapper} >
                        <Button type="submit" size="medium" variant="outlined" color="primary" sx={style.subBtn}>
                            Search
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} >
                    <Box sx={style.capWrapper}>
                        <Typography variant="subtitle2" sx={style.capText}>
                            Resources from <span style={style.capSpan}>NASA OPEN API</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={style.div} />
        </form>
    );
}
 
export default MobileSearchBar;