import { useContext } from "react";
import { Box, Grid, Button, Typography, Divider } from "@mui/material";
import CustomSelect from "../CustomSelect/CustomSelect";
import TextFieldSelect from "../TextFieldSelect/TextFieldSelect";
import FormStateContext from "../../context/FormContext/FormStateContext";
import HandleFormSubmitContext from "../../context/FormContext/HandleFormSubmitContext";
import searchLabel from "../../Constants/searchLabel";

const label = searchLabel();

const MobileSearchBar = () => {
    const formState = useContext(FormStateContext);
    const handleFormSubmit = useContext(HandleFormSubmitContext);

    return ( 
        <form onSubmit={handleFormSubmit} style={{padding: 10}}>
            <Grid container spacing={1} >

                <Grid item xs={12} sm={3} sx={{backgroundColor: 'white'}}>
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
                </Grid>

                <Grid item xs={12} sm={5} sx={{backgroundColor: 'white'}}>
                    <Box sx={{display: 'flex'}}>
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
                </Grid>

                <Grid item xs={12} sm={4} sx={{backgroundColor: 'white'}}>
                    <Box textAlign="center" sx={{mt: 0.8}} >
                        <Button type="submit" size="medium" variant="outlined" color="primary" sx={{width: "80%"}}>
                            Search
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} sx={{backgroundColor: 'white'}}>
                    <Box sx={{mt: 1}}>
                        <Typography variant="subtitle2" sx={{textAlign: 'center'}}>
                            Resources from <span style={{color: 'blue'}}>NASA OPEN API</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{mt: 1.5}} />
        </form>
    );
}
 
export default MobileSearchBar;