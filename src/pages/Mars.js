import { Spirit, Curiosity, Opportunity } from '../Constants/rover';
import { ImageCard, BaseNavBar, SideBar, CollapseList } from "../components";
import { Box, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';


// for rover detail --> spirit, Curiosity, Opportunity
// https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/?api_key=DEMO_KEY 


const MARS = ({handleOpenMenu, matches}) => {


  return ( 
        <Box
            sx={{
                mt:{
                    xs: 7,
                    sm: 8,
                    md: 10,
                    lg: 10,
                    xl: 10
                } 
            }}
        >

            {/* base top nav */}
            <BaseNavBar handleOpenMenu={handleOpenMenu} matches={matches} ></BaseNavBar>

            {/* main content */}
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} direction="row">
                    {/* side bar  */}
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={{backgroundColor: 'white'}}>
                        {matches === false ?
                          // for screen above small 
                          <SideBar sideBarHeading="NASA ROVERS" buttons={["Curiosity", "Opportunity", "Spirit"]} />
                          :
                          // for small and extra small screens
                          <CollapseList 
                            collapseListHeading="NASA ROVERS" 
                            listButtons={["Curiosity", "Opportunity", "Spirit"]}
                          />
                        }
                    </Grid>

                    {/* content */}
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10} sx={{ backgroundColor: 'white' }}
                      >
                        <Grid container spacing={0}>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{backgroundColor: 'white'}}>
                            <Typography
                              variant="button"
                              sx={{
                                color: 'grey.800',
                                pl:{
                                  xs: 4,
                                  sm: 4,
                                  md: 25,
                                  lg: 25,
                                  xl: 25
                                }, 
                              }}
                            >
                              {Spirit.name} Rover
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{backgroundColor: 'white', p: 2}}>
                            <ImageCard
                              maxWidth={'100%'}
                              imgHeight={420} 
                              imgUrl={Spirit.image}
                              content={
                                  {
                                      display: false,
                                      title: '',
                                      detail: ''
                                  }
                              }
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{backgroundColor: 'white', p:2}}>
                            <Paper
                              variant="outlined"
                              sx={{
                                ml:{
                                  xs: 4,
                                  sm: 4,
                                  md: 0,
                                  lg: 0,
                                  xl: 0
                                }, 
                              }}
                            >
                              <TableContainer >
                                  <Table size="medium" sx={{ minWidth: 270 }} aria-label="rover info table">

                                    <TableBody>

                                      <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Landing Date
                                        </TableCell>
                                        <TableCell>{Spirit.landing_date}</TableCell>
                                      </TableRow>

                                      <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Launch Date
                                        </TableCell>
                                        <TableCell>{Spirit.launch_date}</TableCell>
                                      </TableRow>

                                      <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Status
                                        </TableCell>
                                        <TableCell>{Spirit.status}</TableCell>
                                      </TableRow>

                                      <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Max Sol
                                        </TableCell>
                                        <TableCell>{Spirit.max_sol}</TableCell>
                                      </TableRow>

                                      <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Max Date
                                        </TableCell>
                                        <TableCell>{Spirit.max_date}</TableCell>
                                      </TableRow>

                                      <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                          Total Photos
                                        </TableCell>
                                        <TableCell>{Spirit.total_photos}</TableCell>
                                      </TableRow>

                                    </TableBody>

                                  </Table>
                              </TableContainer>
                            </Paper>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{backgroundColor: 'white', p: 2}}>
                            <Paper
                             variant="outlined"
                              sx={{
                                p: 2,
                                mb: 8,
                                ml:{
                                  xs: 4,
                                  sm: 4,
                                  md: 0,
                                  lg: 0,
                                  xl: 0
                                }, 
                              }}
                              
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: 'grey.800',
                                  fontSize: 14
                                }}
                              >
                                {Spirit.detail}
                              </Typography>
                            </Paper>
                          </Grid>
                        </Grid>
                    </Grid>                    
                </Grid>
            </Box>
        </Box>
    );
}
 
export default MARS;

/*
1. Curiosity

  "rover": {
    "id": 5,
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active",
    "max_sol": 3647,
    "max_date": "2022-11-09",
    "total_photos": 608651,
    "cameras": [
      {
        "name": "FHAZ",
        "full_name": "Front Hazard Avoidance Camera"
      },
      {
        "name": "NAVCAM",
        "full_name": "Navigation Camera"
      },
      {
        "name": "MAST",
        "full_name": "Mast Camera"
      },
      {
        "name": "CHEMCAM",
        "full_name": "Chemistry and Camera Complex"
      },
      {
        "name": "MAHLI",
        "full_name": "Mars Hand Lens Imager"
      },
      {
        "name": "MARDI",
        "full_name": "Mars Descent Imager"
      },
      {
        "name": "RHAZ",
        "full_name": "Rear Hazard Avoidance Camera"
      }
------------------------------------------------------

2. Opportunity
"rover": {
    "id": 6,
    "name": "Opportunity",
    "landing_date": "2004-01-25",
    "launch_date": "2003-07-07",
    "status": "complete",
    "max_sol": 5111,
    "max_date": "2018-06-11",
    "total_photos": 198439,
    "cameras": [
      {
        "name": "FHAZ",
        "full_name": "Front Hazard Avoidance Camera"
      },
      {
        "name": "NAVCAM",
        "full_name": "Navigation Camera"
      },
      {
        "name": "PANCAM",
        "full_name": "Panoramic Camera"
      },
      {
        "name": "MINITES",
        "full_name": "Miniature Thermal Emission Spectrometer (Mini-TES)"
      },
      {
        "name": "ENTRY",
        "full_name": "Entry, Descent, and Landing Camera"
      },
      {
        "name": "RHAZ",
        "full_name": "Rear Hazard Avoidance Camera"
      }
--------------------------------------------------------------

3. Spirit
"rover": {
    "id": 7,
    "name": "Spirit",
    "landing_date": "2004-01-04",
    "launch_date": "2003-06-10",
    "status": "complete",
    "max_sol": 2208,
    "max_date": "2010-03-21",
    "total_photos": 124550,
    "cameras": [
      {
        "name": "FHAZ",
        "full_name": "Front Hazard Avoidance Camera"
      },
      {
        "name": "NAVCAM",
        "full_name": "Navigation Camera"
      },
      {
        "name": "PANCAM",
        "full_name": "Panoramic Camera"
      },
      {
        "name": "MINITES",
        "full_name": "Miniature Thermal Emission Spectrometer (Mini-TES)"
      },
      {
        "name": "ENTRY",
        "full_name": "Entry, Descent, and Landing Camera"
      },
      {
        "name": "RHAZ",
        "full_name": "Rear Hazard Avoidance Camera"
      }
    ]

*/

