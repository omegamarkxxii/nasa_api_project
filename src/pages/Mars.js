import { useState, useEffect } from 'react';
import { Spirit, Curiosity, Opportunity } from '../Constants/rover';
import { ImageCard, BaseNavBar, SideBar, CollapseList, DetailTable, PaperText } from "../components";
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const MARS = () => {
  const [id, setID] = useState(2);
  const [rover, setRover] = useState({...Spirit});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const rovers = [Curiosity, Opportunity, Spirit];
    setRover({...rovers[id]});
  }, [id]);

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
            <BaseNavBar />

            {/* main content */}
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} direction="row">
                    {/* side bar  */}
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={{backgroundColor: 'white'}}>
                        {matches === false ?
                          // for screen above small 
                          <SideBar 
                            setID={setID} 
                            sideBarHeading="NASA ROVERS" 
                            buttons={[
                                {
                                  name: "Curiosity",
                                  id: 0
                                },
                                {
                                  name: "Opportunity",
                                  id: 1
                                },
                                {
                                  name: "Spirit",
                                  id: 2
                                }
                              ]}
                           />
                          :
                          // for small and extra small screens
                          <CollapseList 
                            setID={setID}
                            collapseListHeading="NASA ROVERS" 
                            listButtons={[
                              {
                                name: "Curiosity",
                                id: 0
                              },
                              {
                                name: "Opportunity",
                                id: 1
                              },
                              {
                                name: "Spirit",
                                id: 2
                              }
                            ]}
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
                              {rover.name} Rover
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={{backgroundColor: 'white', p: 2}}>
                            <ImageCard
                              maxWidth={'100%'}
                              imgHeight={420} 
                              imgUrl={rover.image}
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
                            <DetailTable
                              tableContent={
                                [
                                  {
                                    id: "Landing Date",
                                    value: rover.landing_date
                                  },
                                  {
                                    id: "Launch Date",
                                    value: rover.launch_date
                                  },
                                  {
                                    id: "Status",
                                    value: rover.status
                                  },
                                  {
                                    id: "Max Sol",
                                    value: rover.max_sol
                                  },
                                  {
                                    id: "Max Date",
                                    value: rover.max_date
                                  },
                                  {
                                    id: "Total Photos",
                                    value: rover.total_photos
                                  }
                                ]
                              }
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{backgroundColor: 'white', p: 2}}>
                            <PaperText text={rover.detail} />
                          </Grid>
                        </Grid>
                    </Grid>                    
                </Grid>
            </Box>
        </Box>
    );
}
 
export default MARS;