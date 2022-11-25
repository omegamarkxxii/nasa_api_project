import { Accordion, AccordionDetails, AccordionSummary, Typography, Stack, Divider, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CollapseTable = () => {
    return ( 
        <div style={{marginTop: 3}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={ <ExpandMoreIcon /> }
                    aria-controls="panel1a-content"
                    id="rules-table"
                >
                    <Typography> Rules </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack sx={{backgroundColor: 'white', p: 2}}>
                        <Box>
                            <Typography variant="subtitle2" sx={{color: "grey.700"}}>1. X-Rate_Limit</Typography>
                            <Typography variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                                <span style={{color: "black", fontSize: 13, marginRight: 2}}>-</span> API-Call-Remaining:   <span style={{color: "blue", fontWeight: "bold", fontSize: 15, marginLeft: 4}}>998</span> 
                            </Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                                <span style={{color: "black", fontSize: 13, marginRight: 2}}>-</span> refresh / reset every 1 hour 
                            </Typography>
                        </Box>

                        <Divider sx={{mb: 1, mt: 0.4}} />

                        <Box>
                            <Typography variant="subtitle2" sx={{color: "grey.700"}}>2. Parameters</Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                               date <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span>
                               the date of the image to retrieve, APOD or MARS ROVER 
                            </Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                               sol <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span>
                               sol is for martian years, 1 sol is  1 day in mars, 1000 is equal day 1000 in mars
                            </Typography>
                        </Box>

                        <Divider sx={{mb: 1, mt: 0.4}} />

                        <Box>
                            <Typography variant="subtitle2" sx={{color: "grey.700"}}>3. Limits</Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                               minimun search date <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span>
                               for APOD must be after <span style={{color: "black", fontWeight: "bold"}}>1995-06-16</span>
                            </Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                               maximum sol <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span> refer to rovers page, depends on rover
                            </Typography>
                        </Box>

                        <Divider sx={{mb: 1, mt: 0.4}} />

                        <Box>
                            <Typography variant="subtitle2" sx={{color: "grey.700"}}>4. Format</Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                               for date <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span> must be separated by hypen "-", day-month-year, example: <span style={{color: "black", fontWeight: "bold"}}>24-2-2022</span>
                            </Typography>
                            <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 12, ml: 2}}>
                               for sol <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span> number from 1 to max sol
                            </Typography>
                        </Box>

                        <Divider sx={{mb: 1, mt: 0.4}} />

                        <Box>
                            <Typography variant="subtitle2" sx={{color: "grey.700"}}>NASA_OPEN_API</Typography>
                            <Typography component={"div"} variant="caption" sx={{fontSize: 12, ml: 2}}>
                                <a target="_blank" style={{fontWeight: "bold"}} href="https://api.nasa.gov">www.api.nasa.gov</a>
                            </Typography>
                        </Box>
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default CollapseTable;