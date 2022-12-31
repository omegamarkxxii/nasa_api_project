import { useState, useEffect } from 'react';
import { Spirit, Curiosity, Opportunity } from '../../Constants/rover';
import { BaseContainer, ImageCard, SideBar, CollapseList, DetailTable, PaperText, MobileNavBar, DesktopNavBar } from "../../components";
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import style from './style';

const imgMaxWidth = '100%';
const imgHeight = 420;

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
      <BaseContainer>
        {matches ? <MobileNavBar /> : <DesktopNavBar />}

        <Box component={"main"} sx={style.base} >
          <Box comsponent="section" sx={style.wrapperBox}>
            <Grid container spacing={2} direction="row">
              {/* nav button */}
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2} >
                {matches ? 
                  <CollapseList 
                    setID={setID}
                    collapseListHeading="NASA ROVERS" 
                    listButtons={[
                      { name: "Curiosity", id: 0 },
                      { name: "Opportunity", id: 1 },
                      { name: "Spirit", id: 2 }
                    ]}
                  />

                  :
                    <SideBar 
                      setID={setID} 
                      sideBarHeading="NASA ROVERS" 
                      buttons={[
                        { name: "Curiosity", id: 0 },
                        { name: "Opportunity", id: 1 },
                        { name: "Spirit", id: 2 }
                      ]}
                    />
                }
              </Grid>

              <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                {/* image / table */}
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={style.bckColor}>
                      <Typography variant="button" sx={style.btnTypo} >
                        {rover.name} Rover
                      </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={7} lg={7} xl={7} sx={style.grid}>
                    <ImageCard
                      maxWidth={imgMaxWidth}
                      imgHeight={imgHeight} 
                      imgUrl={rover.image}
                      content={{ display: false, title: '', detail: '' }}
                      />
                  </Grid>

                  <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={style.grid}>
                    <DetailTable
                      tableContent={[
                        { id: "Landing Date", value: rover.landing_date },
                        { id: "Launch Date", value: rover.launch_date },
                        { id: "Status", value: rover.status },
                        { id: "Max Sol", value: rover.max_sol },
                        { id: "Max Date", value: rover.max_date },
                        { id: "Total Photos", value: rover.total_photos }
                      ]}
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
      </BaseContainer>
    );
}
 
export default MARS;