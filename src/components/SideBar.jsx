import { Box , Stack, Typography, Button, Divider} from '@mui/material'

const SideBar = ({setID, sideBarHeading, buttons}) => {
    const handleClick = (id) => {
      setID(id);
    }

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
              {buttons.map((btn, idx) => {
                return <Button key={idx} onClick={() => handleClick(btn.id)} variant="outlined" size="small">{btn.name}</Button>
              })}
            </Stack>
        </Box>
    );
}
 
export default SideBar;