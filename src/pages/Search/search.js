import { DesktopDrawer, BaseContainer, DesktopNavBar, MobileNavBar, MobileDrawer } from "../../components";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Search = ({ dispatch }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return ( 
    <BaseContainer>
      {matches ? <MobileNavBar /> : <DesktopNavBar />}
      {matches ? <MobileDrawer dispatch={dispatch}  /> : <DesktopDrawer dispatch={dispatch} />}
    </BaseContainer>
  );
}
 
export default Search;