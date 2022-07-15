import React from 'react'
import {useState, useEffect} from 'react'
import CoursesList from './CoursesList'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { CssBaseline, Typography } from '@mui/material'
import Navbar from './Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Courses({setCurrentUser}) {

    const [courses, setCourses] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [name, setName] = useState('')
    const [time, setTime] = useState()
    const [location, setLocation] = useState('')
    const [masterID, setMasterID] = useState()
    const [padawanID, setPadawanID] = useState([])


    function handleClick() {
        setIsClicked(isClicked => !isClicked)
    }

    function handleNewCourse(newCourse) {
        setCourses([...courses, newCourse])
    }

    const onUpdatedCourse = (updatedCourse) => {
      const filteredCourses = courses.filter(course => course.id !== updatedCourse.id)
      filteredCourses.push(updatedCourse)
      setCourses(filteredCourses)
    }

    const filteredDeletedCourse = (id) => {
      setCourses(courses.filter(course => course.id !== id))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newCourseParams = {
            name: name,
            location: location,
            time: time,
            master_id: masterID,
            padawan_id: padawanID

        }
        fetch('/courses', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify( newCourseParams )
        })
        .then(resp => resp.json())
        .then(data => handleNewCourse(data))
    }

    useEffect(() => {
        fetch(`/courses`)
          .then((resp) => resp.json())
          .then(setCourses);
    }, []);

    useEffect(() => {
      fetch('/me')
      .then(resp => {
        if (resp.ok) {
          resp.json().then((data) => setCurrentUser(data));
        }
      })}, []);

      const theme = createTheme({
        palette: {
          primary: {
            main: '#00b0ff',
          },
          secondary: {
            main: '#00b0ff',
          },
          background: {
            default: '#636363'
          },
        },
      });

  return (
    <div>
      <Navbar />
      <br />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant='h3' sx={{color: '#e0e0e0'}}> Our Jedi Academy Courses</Typography>
        <br />
        <Button onClick={handleClick} sx={{bgcolor: '#424242', color: '#00b0ff'}}> Create Course </Button>
        {isClicked ?
            <Box component='form' onSubmit={e => handleSubmit(e)} sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} >
               <TextField 
               label='Name'
               onChange={e => setName(e.target.value)}
               />
               <TextField 
               label='Location'
               onChange={e => setLocation(e.target.value)}
               />
               <TextField 
               label='Time'
               onChange={e => setTime(e.target.value)}
               />
               <TextField 
               label='MasterID'
               onChange={e => setMasterID(e.target.value)}
               />
               <TextField 
               label='PadawanID'
               onChange={e => setPadawanID(e.target.value)}
               />
               <Button  type='submit' sx={{bgcolor: '#424242', color: '#00b0ff', alignContent: 'center'}}> Create New Course </Button>
            </Box>
         : null }
        <CoursesList courses={courses} filteredDeletedCourse={filteredDeletedCourse} onUpdatedCourse={onUpdatedCourse}/>
        </ThemeProvider>
    </div>
  )
}

export default Courses