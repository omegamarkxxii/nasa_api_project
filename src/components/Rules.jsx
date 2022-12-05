import { Paper, Box, Typography, Divider } from "@mui/material";


const Rules = () => {
    return ( 
        <Paper
            variant="outlined"
            sx={{
                width: '90%',
                p: 0.5,
            }}
        >
            <Box sx={{pl: 2}}>
                <Typography variant="subtitle2" sx={{color: "grey.700", fontWeight: "bold"}}>Rules</Typography>
            </Box>

            <Divider sx={{mb: 2, mt: 0.4}} />

            <Box>
                <Typography variant="subtitle2" sx={{color: "grey.700", fontSize: 12, fontWeight: "bold"}}>1. X-Rate_Limit</Typography>
                <Typography variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    <span style={{color: "black", fontSize: 13, marginRight: 2}}>-</span> API-Call-Remaining:   <span style={{color: "blue", fontWeight: "bold", fontSize: 15, marginLeft: 4}}>998</span> 
                </Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    <span style={{color: "black", fontSize: 13, marginRight: 2}}>-</span> refresh / reset every 1 hour 
                </Typography>
            </Box>

            <Divider sx={{mb: 1, mt: 0.4}} />

            <Box>
                <Typography variant="subtitle2" sx={{color: "grey.700", fontSize: 12, fontWeight: "bold"}}>2. Parameters</Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    date <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span>
                    the date of the image to retrieve, APOD or MARS ROVER 
                </Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    sol <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span>
                    sol is for martian years, 1 sol is  1 day in mars, 1000 is equal day 1000 in mars
                </Typography>
            </Box>

            <Divider sx={{mb: 1, mt: 0.4}} />

            <Box>
                <Typography variant="subtitle2" sx={{color: "grey.700", fontSize: 12, fontWeight: "bold"}}>3. Limits</Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    minimun search date <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span>
                    for APOD must be after <span style={{color: "black", fontWeight: "bold"}}>1995-06-16</span>
                </Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    maximum sol <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span> refer to rovers page, depends on rover
                </Typography>
            </Box>

            <Divider sx={{mb: 1, mt: 0.4}} />

            <Box>
                <Typography variant="subtitle2" sx={{color: "grey.700", fontSize: 12, fontWeight: "bold"}}>4. Format</Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    for date <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span> must be separated by hypen "-", year-month-day, example: <span style={{color: "black", fontWeight: "bold"}}>2022-12-30</span>
                </Typography>
                <Typography component={"p"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    for sol <span style={{color: "black", fontSize: 13, marginLeft: 2, marginRight: 4}}>-</span> number from 1 to max sol
                </Typography>
            </Box>

            <Divider sx={{mb: 1, mt: 0.4}} />

            <Box>
                <Typography variant="subtitle2" sx={{color: "grey.700", fontSize: 12, fontWeight: "bold"}}>NASA_OPEN_API</Typography>
                <Typography component={"div"} variant="caption" sx={{color: "grey.600", fontSize: 11, ml: 2}}>
                    all resource comes from <span style={{color: "#1e2021", fontSize: 13, fontWeight: "bold"}}>api.nasa.gov</span>
                </Typography>
            </Box>

        </Paper>
    );
}
 
export default Rules;