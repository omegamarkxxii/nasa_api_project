import { Paper, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";

const DetailTable = ({tableContent}) => {
    return ( 
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
            <TableContainer>
                <Table size="medium" sx={{ minWidth: 270 }} aria-label="rover info table">
                    <TableBody>
                        {tableContent.map((content, idx) => {
                            return (
                                <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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