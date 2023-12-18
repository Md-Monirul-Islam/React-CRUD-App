import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <>
           <Box textAlign={'center'} p={2} bgcolor={orange[400]}>
                        <Typography variant='h4'>
                            Students List
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#616161'}}>
                                        <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>No</TableCell>
                                        <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>Name</TableCell>
                                        <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>Email</TableCell>
                                        <TableCell align='center' style={{color:'white',fontWeight:'bold',fontSize:16}}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align='center'>1</TableCell>
                                        <TableCell align='center'>Munna</TableCell>
                                        <TableCell align='center'>munna@gmail.com</TableCell>
                                        <TableCell align='center'>
                                            <Tooltip title={'View'}>
                                                <IconButton><Link to={'/view/1'}><VisibilityIcon color='primary' /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title={'Edit'}>
                                                <IconButton><Link to={'/edit/1'}><EditIcon /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title={"Delete"}>
                                                <IconButton><DeleteIcon color={"secondary"} /></IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>     
        </>
    );
};

export default List;