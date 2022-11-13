import { Box , Stack, Typography, Button, Divider} from '@mui/material'

const SideBar = ({sideBarHeading, buttons}) => {
    return ( 
        <Box sx={{ 
            width:'80%', 
            pl: {
              xs: 0,
              sm: 0,
              md: 3,
              lg: 0,
              xl: 0
            } 
            }}
        >
            <Stack spacing={2}>
              <Typography
                variant="subtitle2"
                align="center"
                sx={{
                  color: 'grey.800',
                }}
              >
                {sideBarHeading}
                <Divider />
              </Typography>
              {/* <Button variant="outlined" size="small">Curiosity</Button>
              <Button variant="outlined" size="small">Opportunity</Button>
              <Button variant="outlined" size="small">Spirit</Button> */}
              {buttons.map((btn, idx) => {
                return <Button key={idx} variant="outlined" size="small">{btn}</Button>
              })}
            </Stack>
        </Box>
    );
}
 
export default SideBar;