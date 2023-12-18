import React from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import List from '../student/List';



const Home = () => {
    return (
        <>
            <Box textAlign={'center'} bgcolor={deepPurple[400]} color="white" p={2} mb={1}>
                <Typography variant='h2'>React CRUD with API Call</Typography>
            </Box>
            <Grid container justify='center' spacing={2}>
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
                    <List />
                </Grid>         
            </Grid>
        </>
    );
};

export default Home;