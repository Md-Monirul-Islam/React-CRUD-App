import React from 'react';
import { Typography, Box, Grid, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip, TextField, Button } from '@mui/material';
import { deepPurple, green, orange } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Box textAlign={'center'} bgcolor={deepPurple[400]} color="white" p={2} mb={1}>
                <Typography variant='h2'>React CRUD with API Call</Typography>
            </Box>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Box textAlign={'center'} p={2} mb={2} bgcolor={green[400]}>
                        <Typography variant='h4'>
                            Add Student
                        </Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                            <TextField autoComplete='stuname' name='stuname' variant='outlined' required fullWidth id='stuname' label="Name" autoFocus />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete='email' name='email' variant='outlined' required fullWidth id='email' label={'Email Address'} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type='submit' variant='contained' color='primary' fullWidth>Add</Button>
                        </Box>
                    </form>
                </Grid>

                <Grid item md={6} xs={12}>
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
                                            <Tooltip title={'view'}>
                                                <IconButton><Link to={'/view/1'}><VisibilityIcon color='primary' /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title={'edit'}>
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
                </Grid>
            </Grid>
        </>
    );
};

export default Home;