import SelectField from './SelectField';
import SearchBar from './SearchBar';
import CollapseTable from './CollapseTable';
import { TextField, Box, Grid, MenuItem, Divider } from '@mui/material';


const Form = () => {


    return ( 
        <form>
            <Grid container spacing={0} sx={{backgroundColor: 'lightblue'}} >
                <Grid xs={6} sm={3} md={3} lg={3} xl={3} item sx={{backgroundColor: 'lightgreen'}}> <SelectField /> </Grid>
                <Grid xs={6} sm={4} md={5} lg={5} xl={5} item sx={{backgroundColor: 'pink'}}> <SearchBar /> </Grid>
                <Grid xs={12} sm={5} md={4} lg={4} xl={4} item sx={{backgroundColor: 'gray'}}> <CollapseTable /> </Grid>
            </Grid>
        </form>
    );
}
 
export default Form;