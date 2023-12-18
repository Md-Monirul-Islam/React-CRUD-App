import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import { orange } from '@mui/material/colors';

const View = () => {
    return (
        <>
            <Box textAlign={'center'} p={2} bgcolor={orange[400]}>
                <Typography variant='h4'>Student Details</Typography>
            </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{backgroundColor:'#616161'}}>
                                <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>ID</TableCell>
                                <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>Name</TableCell>
                                <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align={'center'}>1</TableCell>
                                <TableCell align={'center'}>Munna</TableCell>
                                <TableCell align={'center'}>munna@gmail.com</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box m={3} textAlign={'center'}>
                    <Button variant='contained' color='primary'>Back to Home</Button>
                </Box>
        </>
    );
};

export default View;