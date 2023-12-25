import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import { useParams, useNavigate   } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const View = () => {

    const {id} = useParams()
        console.log(id)
    
    const [student, setStudent] = useState([])
    useEffect(()=>{
        async function getStudentData(){
            try{
                const student = await axios.get(` http://localhost:3333/students/${id}`)
                //console.log(student.data)
                setStudent(student.data)
            }
            catch (error){
                console.log("Some things wrong");
            }
        }
        getStudentData();
    }, [id])
    
    let navigate  = useNavigate ();

    const handleClick = () => {
        navigate("/")
    }
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
                                <TableCell align={'center'}>{student.id}</TableCell>
                                <TableCell align={'center'}>{student.stuname}</TableCell>
                                <TableCell align={'center'}>{student.email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box m={3} textAlign={'center'}>
                    <Button variant='contained' color='primary' onClick={handleClick}>Back to Home</Button>
                </Box>
        </>
    );
};

export default View;