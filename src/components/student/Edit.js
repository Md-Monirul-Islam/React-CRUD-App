import React from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import { useNavigate   } from 'react-router-dom';
//import List from '../student/List';
const Edit = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
            <Box textAlign={'center'} bgcolor={deepPurple[400]} color="white" p={2} mb={1}>
                <Typography variant='h2'>React CRUD with API Call</Typography>
            </Box>
            <Grid container justifyContent='center' spacing={2}>
                <Grid item md={6} xs={12}>
                    <Box textAlign={'center'} p={2} mb={2} bgcolor={green[400]}>
                        <Typography variant='h4'>
                            Edit Student
                        </Typography>
                    </Box>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <TextField autoComplete='id' name='id' variant='outlined' required fullWidth id='stuname' label="ID" autoFocus value={1} disabled />
                            </Grid>
                            <Grid item xs={6}>
                            <TextField autoComplete='stuname' name='stuname' variant='outlined' required fullWidth id='stuname' label="Name" autoFocus />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete='email' name='email' variant='outlined' required fullWidth id='email' label={'Email Address'} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type='submit' variant='contained' color='primary' fullWidth>Update</Button>
                        </Box>
                    </form>
                    <Box m={3} textAlign={'center'}>
                        <Button variant='contained' color='secondary' onClick={handleClick}>Back to Home</Button>
                    </Box>
                </Grid>
                        
            </Grid>
        </>
    );
};

export default Edit;