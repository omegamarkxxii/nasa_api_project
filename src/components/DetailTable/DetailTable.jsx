import { Paper, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";
import style from './style';

const DetailTable = ({tableContent}) => {
    return ( 
        <Paper variant="outlined" sx={style.root}>
            <TableContainer>
                <Table size="medium" sx={style.table} aria-label="rover info table">
                    <TableBody>
                        {tableContent.map((content, idx) => {
                            return (
                                <TableRow key={idx} sx={style.row}>
                                    <TableCell component="th" scope="row"> {content.id} </TableCell>
                                    <TableCell>{content.value}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
 
export default DetailTable;