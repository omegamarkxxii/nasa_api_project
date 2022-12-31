import { Box , Stack, Typography, Button, Divider} from '@mui/material'
import style from './style';

const SideBar = ({setID, sideBarHeading, buttons}) => {
    const handleClick = (id) => {
      setID(id);
    }

    return ( 
        <Box sx={style.base} >
            <Stack spacing={2}>
              <Typography variant="subtitle2" align="center" sx={style.head} >
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