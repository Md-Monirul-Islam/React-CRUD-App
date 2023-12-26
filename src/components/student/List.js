import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit'; 
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const List = () => {

    const [students, setStudents] = useState([]);
    useEffect(()=>{
        async function getAllStudent(){
            try{
                const students = await axios.get('http://localhost:3333/students')
                //console.log(students.data)
                setStudents(students.data)
            }
            catch (error){
                console.log("Some things wrong");
            }
        }
        getAllStudent();
    },[])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:3333/students/${id}`)
        var newStudents = students.filter((item) => {
            return item.id !== id;
        })
        setStudents(newStudents);
    }

    
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
                                    {
                                        students.map((student,i)=>{
                                            return (
                                        <TableRow key={i}>
                                        <TableCell align='center'>{i+1}</TableCell>
                                        <TableCell align='center'>{student.stuname}</TableCell>
                                        <TableCell align='center'>{student.email}</TableCell>
                                        <TableCell align='center'>
                                            <Tooltip title={'View'}>
                                                <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color='primary' /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title={'Edit'}>
                                                <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title={"Delete"}>
                                                <IconButton onClick={()=>handleDelete(student.id)}><DeleteIcon color={"secondary"} /></IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                            )
                                        })
                                    }
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>     
        </>
    );
};

export default List;