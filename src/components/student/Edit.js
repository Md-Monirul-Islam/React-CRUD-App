import React, { useEffect, useState } from 'react';
import { Typography, Box, Grid, TextField, Button } from '@mui/material';
import { deepPurple, green } from '@mui/material/colors';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
//import List from '../student/List';
const Edit = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({
        stuname:"",
        email:"",
    })
    useEffect(()=>{
        async function getStudent(){
            try{
                const student = await axios.get(`http://localhost:3333/students/${id}`)
                setStudent(student.data)
            }
            catch (error){
                console.log("Some things wrong !!")
            }
        }
        getStudent();
    },[id])

    async function onFormSubmit(e){
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3333/students/${id}`,student)
            navigate('/')
        }
        catch (error){
            console.log('Some things wrong !!')
        }
    }
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    function onTextChange(e){
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
        //console.log(student)
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
                            <TextField autoComplete='id' name='id' variant='outlined' required fullWidth id='stuname' label="ID" autoFocus value={id} disabled />
                            </Grid>
                            <Grid item xs={6}>
                            <TextField autoComplete='stuname' name='stuname' variant='outlined' required fullWidth id='stuname' label="Name" autoFocus value={student.stuname} onChange={e => onTextChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete='email' name='email' variant='outlined' required fullWidth id='email' label={'Email Address'} value={student.email} onChange={e => onTextChange(e)} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type='submit' variant='contained' color='primary' fullWidth onClick={e => onFormSubmit(e)} >Update</Button>
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