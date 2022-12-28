import { useState, useEffect } from 'react';
import { Spirit, Curiosity, Opportunity } from '../../Constants/rover';
import { ImageCard, BaseNavBar, SideBar, CollapseList, DetailTable, PaperText } from "../../components";
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import style from './style';


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
        <Box sx={style.root}>

            {/* base top nav */}
            <BaseNavBar />

            {/* main content */}
            <Box sx={style.box}>
                <Grid container spacing={2} direction="row">
                    {/* side bar  */}
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2} sx={style.bckColor}>
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
                    <Grid item xs={12} sm={12} md={10} lg={10} xl={10} sx={style.bckColor}
                      >
                        <Grid container spacing={0}>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={style.bckColor}>
                            <Typography variant="button" sx={style.btnTypo} >
                              {rover.name} Rover
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={style.grid}>
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
                          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={style.grid}>
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
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={style.grid}>
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